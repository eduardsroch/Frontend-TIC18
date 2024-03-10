import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../data-base.service';
import { Suinos } from '../suino.model';

@Component({
  selector: 'app-cadastro-suinos',
  templateUrl: './cadastro-suinos.component.html',
  styleUrl: './cadastro-suinos.component.css'
})
export class CadastroSuinosComponent implements OnInit{
  formSuinos!: FormGroup;
  formularioInvalido: boolean | undefined;

  constructor(private formConstrutor: FormBuilder, private bancoService:DataBaseService) { }
  
  ngOnInit() {
    this.formSuinos = new FormGroup({
      'brincoAnimal': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]*$/)]),                                
      'brincoPai': new FormControl(null, [Validators.required,Validators.pattern(/^[0-9]*$/)]),
      'brincoMae': new FormControl(null, [Validators.required,Validators.pattern(/^[0-9]*$/)]),
      'dataNascimento': new FormControl(null,  [Validators.required]),
      'dataSaida': new FormControl(null,  [Validators.required]),
      'status': new FormControl(null, Validators.required),
      'sexo': new FormControl(null, Validators.required),
      
    });
    this.bancoService.getSuinos()
  }   



  adicionarBilhete() {
    if (this.formSuinos.valid) {
    const cadastroData: Suinos = {
      brincoAnimal: this.formSuinos.get('brincoAnimal')?.value,
      brincoPai: this.formSuinos.get('brincoPai')?.value,
      brincoMae: this.formSuinos.get('brincoMae')?.value,
      dataNascimento: this.formSuinos.get('dataNascimento')?.value,
      dataSaida: this.formSuinos.get('dataSaida')?.value,
      status: this.formSuinos.get('status')?.value,
      sexo: this.formSuinos.get('sexo')?.value,
    };
  
    console.log(cadastroData);
    this.bancoService.addCadastroSuinos(cadastroData);
    this.formSuinos.reset();
    this.formularioInvalido = false; 
    } else {
      this.formularioInvalido = true; 
    }
  }


  onSubmit() {
    if (this.formSuinos.valid) {
      console.log(this.formSuinos.value);
    }

  }
}
