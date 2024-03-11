import { Atendimento } from './../../atendimento';
import { Component, Input} from '@angular/core';

import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent {
  id: number = 0;
  atendimento: Atendimento = {} as Atendimento;

  constructor(private dataService: DataService, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.params['id'];
  }
  
  ngOnInit() {
    this.atendimento = this.dataService.getAtendimento(this.id);
  }
  

}
