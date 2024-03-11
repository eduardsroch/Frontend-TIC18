import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlePesosComponent } from './controle-pesos.component';

describe('ControlePesosComponent', () => {
  let component: ControlePesosComponent;
  let fixture: ComponentFixture<ControlePesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlePesosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlePesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
