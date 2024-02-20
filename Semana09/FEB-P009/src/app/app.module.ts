import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoteirosComponent } from './roteiros/roteiros.component';
import { SiteuescComponent } from './siteuesc/siteuesc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JReaderComponent } from './jreader/jreader.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ClassesComponent } from './classes/classes.component';
import { PropriedadesComponent } from './propriedades/propriedades.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { ValorPropriedadeComponent } from './valor-propriedade/valor-propriedade.component';
import { MudaCorCategoriaDirective } from './muda-cor-categoria.directive';
import { MudaCorVeiculosDirective } from './muda-cor-veiculos.directive';
import {MatButtonModule} from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs'
@NgModule({
  declarations: [
    AppComponent,
    RoteirosComponent,
    SiteuescComponent,
    JReaderComponent,
    CarrinhoComponent,
    ClassesComponent,
    PropriedadesComponent,
    ObjetosComponent,
    ValorPropriedadeComponent,
    MudaCorCategoriaDirective,
    MudaCorVeiculosDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
