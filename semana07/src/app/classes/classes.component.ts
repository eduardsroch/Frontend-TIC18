import { EventEmitter, Component, Input, Output } from '@angular/core';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {
  @Input() categorias:string[] = [];
  @Output() categoriaSelecionada = new EventEmitter<string>();
  selecionado(categoria:string){
    this.categoriaSelecionada.emit(categoria);
  }
}
