class Tarefa {
    constructor(nome) {
        this.nome = nome;
    }
}

function adicionaTarefaDOM(tarefa) {
    const lista = document.getElementById('listaTarefas');
    const li = document.createElement('li');
    li.textContent = tarefa.nome;
    lista.appendChild(li);
}

function adicionaTarefaNoStorage(tarefa) {
    let tarefas = [];

    if (localStorage.getItem('tarefas')) {
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }

    tarefas.push(tarefa);

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}


document.getElementById('formTarefa').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const inputTarefa = document.getElementById('inputTarefa');
    const nomeTarefa = inputTarefa.value.trim();

    if (nomeTarefa !== '') {
        const novaTarefa = new Tarefa(nomeTarefa);

        adicionaTarefaDOM(novaTarefa);
        adicionaTarefaNoStorage(novaTarefa);

        inputTarefa.value = ''; 
    }
});

window.addEventListener('load', function() {
    let tarefas = [];

    if (localStorage.getItem('tarefas')) {
        tarefas = JSON.parse(localStorage.getItem('tarefas'));

        tarefas.forEach(function(tarefa) {
            const novaTarefa = new Tarefa(tarefa.nome);
            adicionaTarefaDOM(novaTarefa);
        });
    }
});
