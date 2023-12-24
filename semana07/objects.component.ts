// objects.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent {
  @Input() selectedCategory: string;
  @Output() selectedObject = new EventEmitter<any>();

  vehicles: any = {
    Avioes: [
      {
        "Name": "Supermarine Spitfire",
        "Model": "Mk V",
        // ... outras propriedades
      },
  
    ],
    Carros: [
      {
        "Name": "Tesla Model S",
        "Model": "2022",
        // ... outras propriedades
      },
      // ... outros veículos
    ],
    Barcos: [
      {
        "Name": "Ferretti Yachts",
        "Model": "670",
        // ... outras propriedades
      },
      // ... outros veículos
    ]
  };

  onSelectObject(vehicle: any) {
    this.selectedObject.emit(vehicle);
  }
}
