import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routerApp';
  constructor(private rotas:Router, private rotaAtiva: ActivatedRoute){}
  navigate(name:string){
    this.rotas.navigate(['/' + name]); //we can send product object as route param
  }

  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;
}
