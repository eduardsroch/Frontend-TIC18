import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroSuinosComponent } from './cadastro-suinos/cadastro-suinos.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarSuinosComponent } from './listar-suinos/listar-suinos.component';
import { EditarComponent } from './editar/editar.component';

import { IdadePipe } from './idade.pipe';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import { AutenticaInterceptor } from './autentica.interceptor';
import { CadastroPesosComponent } from './cadastro-pesos/cadastro-pesos.component';
import { ControlePesosComponent } from './controle-pesos/controle-pesos.component';
import { EditarPesosComponent } from './editar-pesos/editar-pesos.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastro-suinos', component: CadastroSuinosComponent },
  { path: 'listar-suinos', component: ListarSuinosComponent },
  { path: 'editarCadastro/:id', component: EditarComponent },
  { path: 'cadastro-pesos', component: CadastroPesosComponent },
  { path: 'controle-pesos', component: ControlePesosComponent },
  { path: 'editar-pesos', component: EditarPesosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AutenticacaoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroSuinosComponent,
    HomeComponent,
    ListarSuinosComponent,
    EditarComponent,
    IdadePipe,
    AutenticacaoComponent,
    LoadingSpinnerComponent,
    CadastroPesosComponent,
    ControlePesosComponent,
    EditarPesosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDividerModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AutenticaInterceptor, multi: true },
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
