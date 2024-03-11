import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.css'
})
export class FormCadastroComponent implements OnInit{
  form: FormGroup;

  constructor(private dataService: DataService) { 
    this.form = new FormGroup({
      'appointment_day': new FormControl(null, [Validators.required]),
      'tutor_name': new FormControl(null, [Validators.required]),
      'pet_name': new FormControl(null, [Validators.required]),
      'pet_type': new FormControl(null, [Validators.required]),
      'pet_breed': new FormControl(null, [Validators.required]),
      'details': new FormControl(null),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const dados = this.form.value;
    dados.id = this.dataService.getAtendimentos().length + 1;
    this.dataService.addAtendimento(dados);
    this.form.reset();
  }

}


