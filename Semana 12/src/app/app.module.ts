import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { Routes, RouterModule } from '@angular/router';
import { DetalheComponent } from './components/detalhe/detalhe.component';

const rotasApp: Routes = [
  { path: 'cadastro', component: FormCadastroComponent },
  { path: 'lista', component: AppointmentListComponent },
  { path: 'detalhe/:id', component: DetalheComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FormCadastroComponent,
    AppointmentListComponent,
    DetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rotasApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
