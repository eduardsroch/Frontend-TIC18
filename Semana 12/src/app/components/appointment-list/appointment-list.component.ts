import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  listaAtendimentos = this.dataService.getAtendimentos();

  constructor(private dataService: DataService, private rota: Router) { }

  detalharAtendimento(id: number) {
    console.log(id);
    this.rota.navigate(['/detalhe', id]);
  }




}
