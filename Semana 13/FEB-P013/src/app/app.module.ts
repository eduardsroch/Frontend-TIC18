import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { DetailsComponent } from './components/details/details.component';
import { FormComponent } from './components/form/form.component';

import { Router, Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { VerticalLineComponent } from './components/vertical-line/vertical-line.component';
import { ButtonStyledComponent } from './components/button-styled/button-styled.component';
import { activateGuard } from './activate.guard';
import { deactivateGuard } from './deactivate.guard';
import { HeaderComponent } from './components/header/header.component';
import { RequestManager } from './request-manager';


const rotasApp: Routes = [
  { path: 'cadastro', canActivate: [activateGuard], canDeactivate: [deactivateGuard], component: FormComponent },
  { path: 'lista', canActivate: [activateGuard], canDeactivate: [deactivateGuard], component: AppointmentListComponent },
  { path: 'detalhe/:id', canActivate: [activateGuard], canDeactivate: [deactivateGuard], component: DetailsComponent },
  { path: 'editar/:id', canActivate: [activateGuard], canDeactivate: [deactivateGuard], component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: LoginComponent },
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    DetailsComponent,
    FormComponent,
    LoginComponent,
    VerticalLineComponent,
    ButtonStyledComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rotasApp),
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: RequestManager, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
