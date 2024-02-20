import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barra-de-busca',
  templateUrl: './barra-de-busca.component.html',
  styleUrl: './barra-de-busca.component.css'
})
export class BarraDeBuscaComponent {
  @Output() buscaFeita = new EventEmitter<string>();
  busca = "";

  getBusca(){
    this.busca = (<HTMLInputElement>document.getElementById("txtBusca"))!.value || "";
    this.pesquisado();
  }

  pesquisado(){
    this.buscaFeita.emit(this.busca);
  }

}
