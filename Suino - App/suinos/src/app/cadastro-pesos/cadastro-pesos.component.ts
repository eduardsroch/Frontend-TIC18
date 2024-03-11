import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../data-base.service';
import { Suinos } from '../suino.model';
@Component({
  selector: 'app-cadastro-pesos',
  templateUrl: './cadastro-pesos.component.html',
  styleUrl: './cadastro-pesos.component.css'
})
export class CadastroPesosComponent implements OnInit{
  formSuinos!: FormGroup;
  formularioInvalido: boolean | undefined;
  suinos: Suinos[] = [];

  constructor(private formConstrutor: FormBuilder, private bancoService:DataBaseService) { }
  
  ngOnInit() {
    this.formSuinos = this.formConstrutor.group({
      suino: [null, Validators.required],
      pesos: this.formConstrutor.array([
        this.criarItemPeso()
      ])
    });
    this.bancoService.getSuinos().subscribe(suinos => {
      this.suinos = suinos;
    });
  }   

  criarItemPeso(): FormGroup {
    return this.formConstrutor.group({
      dataDaPesagem: ['', Validators.required],
      peso: ['', [Validators.required, Validators.pattern("^[0-9]*\.?[0-9]+$")]]
    });
  }

  adicionarPeso() {
    this.pesos.push(this.criarItemPeso());
  }
  get pesos() {
    return this.formSuinos.get('pesos') as FormArray;
  }

  onSubmit() {
    let data = this.suinos.find(suino => suino.id === this.formSuinos.value.suino);
    if(!data) {
      return;
    }
    data.pesos = (this.formSuinos.value.pesos);
    console.log(this.formSuinos.value.pesos);
    console.log(data);
    this.bancoService.editarCadastro(data.id!, data).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
  }

}

