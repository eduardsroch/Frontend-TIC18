import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {
  @Input() salvos:any;
  json:string[] = [];
  adicionarVeiculo(){
    this.json.push(this.salvos);
    console.log(this.json);
  }
}