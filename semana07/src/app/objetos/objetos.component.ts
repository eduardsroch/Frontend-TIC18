import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrl: './objetos.component.css'
})
export class ObjetosComponent {
  @Input() veiculos:any;
  @Output() veiculoSelecionado = new EventEmitter<any>();
  selecionado(veiculo:any){
    this.veiculoSelecionado.emit(veiculo);
  }
}
