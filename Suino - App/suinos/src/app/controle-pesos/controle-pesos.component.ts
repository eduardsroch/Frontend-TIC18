import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Suinos } from '../suino.model';
import { DataBaseService } from '../data-base.service';
import { CategoryScale, Chart, LineController, LineElement, LinearScale, PointElement } from 'chart.js';

@Component({
  selector: 'app-controle-pesos',
  templateUrl: './controle-pesos.component.html',
  styleUrl: './controle-pesos.component.css'
})
export class ControlePesosComponent {

  formSuinos!: FormGroup;
  formularioInvalido: boolean | undefined;
  suinos: Suinos[] = [];
  myChart: any;

  constructor(private formConstrutor: FormBuilder, private bancoService:DataBaseService) { }
  
  ngOnInit() {
    this.formSuinos = this.formConstrutor.group({
      suino: [null, Validators.required],
    });
    this.bancoService.getSuinos().subscribe(suinos => {
      this.suinos = suinos;
    });
    
  }   


  onSubmit() {
    let suino = this.formSuinos.value.suino;
  
    // Certifique-se de que suino e suino.pesos estão definidos
    if (suino && suino.pesos) {
      let datasDaPesagem = suino.pesos.map((peso: { dataDaPesagem: any; }) => peso.dataDaPesagem);
      let pesos = suino.pesos.map((peso: { peso: any; }) => peso.peso);
      Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

      var ctx = document.getElementById('myChart');
      if (this.myChart) {
        this.myChart.destroy();
      }
      if (ctx instanceof HTMLCanvasElement) {
        this.myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: datasDaPesagem,
              datasets: [{
                  label: 'Peso do Suíno',
                  data: pesos,
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  borderColor: 'rgba(255, 99, 132, 1)',
                  borderWidth: 1
              }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }

}
