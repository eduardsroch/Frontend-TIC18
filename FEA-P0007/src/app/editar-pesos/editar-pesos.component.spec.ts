import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPesosComponent } from './editar-pesos.component';

describe('EditarPesosComponent', () => {
  let component: EditarPesosComponent;
  let fixture: ComponentFixture<EditarPesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarPesosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarPesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
