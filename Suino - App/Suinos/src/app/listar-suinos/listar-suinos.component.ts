import { Component } from '@angular/core';
import { Suinos } from '../suino.model';
import { DataBaseService } from '../data-base.service';

@Component({
  selector: 'app-listar-suinos',
  templateUrl: './listar-suinos.component.html',
  styleUrl: './listar-suinos.component.css'
})
export class ListarSuinosComponent {
  displayedColumns: string[] = ['brincoAnimal', 'brincoPai', 'brincoMae', 'dataNascimento', 'dataSaida', 'status', 'sexo', 'idade', 'actions'];
  loadedSuino:Suinos[] = [];
  filtroBrincoPai: string | null = null;
  filtroBrincoMae: string | null = null;
  filtroDataNascimento: string | null = null;
  filtroDataSaida: string | null = null;
  filtroSexo: string | null = null;
  filtroStatus: string | null = null;
  
  constructor(private bancoService:DataBaseService) { }

  ngOnInit(): void {
    this.getAnimal();
  }



  getAnimal() {
    this.bancoService.getSuinos().subscribe(responseData => {
      console.log(responseData);
      this.loadedSuino = responseData;
      console.log(this.loadedSuino);
    });
  }

  editarBilhete(id:any){
    console.log(id);

  }

  apagarTudo(){
    this.bancoService.apagarTodosCadastros().subscribe( () => {
      console.log('Apagou tudo');
      this.loadedSuino = [];
    });
  }

  deletarSuino(id: string) {
    this.bancoService.deletarSuino(id).subscribe(() => {
      this.getAnimal();
    });
  }

  aplicarFiltro() {
    
  let suinosFiltrados = this.loadedSuino.slice();

  if (this.filtroBrincoPai) {
    suinosFiltrados = suinosFiltrados.filter(suino => suino.brincoPai === this.filtroBrincoPai);
  }
  if (this.filtroBrincoMae) {
    suinosFiltrados = suinosFiltrados.filter(suino => suino.brincoMae === this.filtroBrincoMae);
  }

  if (this.filtroDataNascimento) {
    suinosFiltrados = suinosFiltrados.filter(suino => suino.dataNascimento === this.filtroDataNascimento);
  }
  if (this.filtroDataSaida) {
    suinosFiltrados = suinosFiltrados.filter(suino => suino.dataSaida === this.filtroDataSaida);
  }
  if (this.filtroSexo) {
    suinosFiltrados = suinosFiltrados.filter(suino => suino.sexo === this.filtroSexo);
  }
  if (this.filtroStatus) {
    suinosFiltrados = suinosFiltrados.filter(suino => suino.status === this.filtroStatus);
  }

  this.loadedSuino = suinosFiltrados;
  }

  limparFiltro(){
    this.filtroBrincoPai = null;
    this.filtroBrincoMae = null;
    this.filtroSexo = null;
    this.filtroDataNascimento = null;
    this.filtroDataSaida = null;
    this.getAnimal();
  }

}
