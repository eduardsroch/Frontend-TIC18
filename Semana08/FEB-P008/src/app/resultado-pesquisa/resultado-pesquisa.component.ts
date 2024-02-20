import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado-pesquisa',
  templateUrl: './resultado-pesquisa.component.html',
  styleUrl: './resultado-pesquisa.component.css'
})
export class ResultadoPesquisaComponent {
  @Input() json:any[] = [];
  get(element : any){
    let div = document.getElementById("div");
    let titulo = document.createElement("h3");
    let p = document.createElement("p");
    let ancora = document.createElement("a");
    ancora.href = "https://pt.wikipedia.org/wiki/" + element["title"];
    ancora.textContent = "Leia mais";
    titulo.textContent = element["title"];
    p.innerHTML = element["snippet"].replaceAll("span", "b");
    div!.appendChild(titulo);
    div!.appendChild(p);
    div!.appendChild(ancora);
  }
}
