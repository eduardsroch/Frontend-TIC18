import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Wiki';
  constructor(public apiService: ApiService){}
  resultado:any;
  pesquisa="";
  getBusca(busca:string){
    this.pesquisa = busca.replace(' ', "%20");
    this.apiService.getData(this.pesquisa).subscribe(res=>{
    this.resultado = (<JSON>res);
    this.resultado = this.resultado["query"]["search"];
    console.log(this.resultado);
    });
  } 
}
