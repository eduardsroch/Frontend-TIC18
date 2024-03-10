import { Component } from '@angular/core';
import { AutenticaService } from './autentica.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'suinos';

  constructor(private autenticaService: AutenticaService) { }

  ngOnInit(): void {
    this.autenticaService.autoLogin();
  }
}
