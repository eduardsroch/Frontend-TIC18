import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../data-base.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  formSuinos!: FormGroup;
  id:string = '';
  editadoSucesso:boolean = false;
  formularioInvalido!: boolean;
  
  constructor(private formConstrutor: FormBuilder, private bancoService:DataBaseService, private rotas:Router, private route: ActivatedRoute) { }

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
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getSuino(this.id);
  }

  getSuino(id: any) {
    console.log("id-->"    + id);
    this.bancoService.getSuino(id).subscribe(responseData => {
      console.log(responseData);
      this.formSuinos.setValue(responseData);
    });
  }

  salvar() {
    if (this.formSuinos.valid) {
    console.log("salvar: " + this.formSuinos.value);
    this.bancoService.editarCadastro(this.id, this.formSuinos.value).subscribe(responseData => {
      if(responseData.status == 200){
        this.editadoSucesso = true;
        this.rediracionaPrincipal();
        this.formularioInvalido = false;
      }
    });
  }else {
    this.formularioInvalido = true; 
  }
}

  rediracionaPrincipal(){
    setTimeout(() => {
     this.rotas.navigate(['/listar-suinos']);
    }, 2000);
    
  }
}
