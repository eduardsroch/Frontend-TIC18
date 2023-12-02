document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.roteiro-comprar');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const roteiro = this.parentElement;
            const titulo = roteiro.querySelector('.roteiro-destino h3').textContent;
            const inclusos = roteiro.querySelectorAll('.roteiro-incluso li');
            const preco = roteiro.querySelector('.roteiro-preco').textContent;
            const observacoes = roteiro.querySelector('.roteiro-obs').textContent;
            const parcelamento = roteiro.querySelector('.roteiro-parcelamento').textContent;
            const imagem = roteiro.querySelector('.postal').getAttribute('src');

            const pacoteTuristico = {
                titulo: titulo,
                inclusos: Array.from(inclusos).map(item => item.textContent),
                preco: preco,
                observacoes: observacoes,
                parcelamento: parcelamento,
                imagem: imagem
            };

            console.log(pacoteTuristico);
        });
    });

    function inserirRoteiro() {
        const formulario = document.getElementById('formulario');
        const containerDestinos = document.getElementById('container-destinos');

        const novoRoteiro = document.createElement('div');
        novoRoteiro.classList.add('roteiros-viagens');

        const titulo = formulario.querySelector('#titulo').value;
        const inclusos = formulario.querySelector('#inclusos').value.split('\n');
        const preco = formulario.querySelector('#preco').value;
        const observacoes = formulario.querySelector('#observacoes').value;
        const parcelamento = formulario.querySelector('#parcelamento').value;
        const imagem = formulario.querySelector('#imagem').value;

        novoRoteiro.innerHTML = `
            <img src="${imagem}" class="postal">
            <div class="roteiro-destino"><h3>${titulo}</h3></div>
            <ul class="roteiro-incluso">
                ${inclusos.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <div class="roteiro-preco">${preco}</div>
            <div class="roteiro-obs">${observacoes}</div>
            <div class="roteiro-parcelamento">${parcelamento}</div>
            <button class="roteiro-comprar">COMPRAR</button>
        `;

        containerDestinos.appendChild(novoRoteiro);
    }
});
