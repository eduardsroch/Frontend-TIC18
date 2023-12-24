// value-property.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-value-property',
  templateUrl: './value-property.component.html',
  styleUrls: ['./value-property.component.css']
})
export class ValuePropertyComponent {
  @Input() selectedProperty: string;
}
