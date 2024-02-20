import { Component } from '@angular/core';

@Component({
  selector: 'app-roteiros',
  templateUrl: './roteiros.component.html',
  styleUrl: './roteiros.component.css'
})
export class RoteirosComponent {
  onClick(i:number){
    const destinos = document.querySelectorAll(".roteiro-destino");
    const inclusos = document.getElementsByClassName("roteiro-incluso");
    const precos = document.getElementsByClassName("roteiro-preco");
    const observacoes = document.getElementsByClassName("roteiro-obs");
    const parcelamentos = document.getElementsByClassName("roteiro-parcelamento");
    this.capture(destinos[i], inclusos[i], precos[i], observacoes[i], parcelamentos[i]);
  }
  capture(destino: any, incluso: any, preco: any, obs: any, parcelamento: any){
    var objJson = {
        "Destino" : destino.innerText,
        "Incluso" : [incluso.innerText.split("\n")[0], incluso.innerText.split("\n")[1], incluso.innerText.split("\n")[2]],
        "Preço" : preco.innerText,
        "Observação" : obs.innerText,
        "Parcelamento" : parcelamento.innerText
    }
    var obj = JSON.stringify(objJson);
    console.log(JSON.parse(obj));
  }       
}
