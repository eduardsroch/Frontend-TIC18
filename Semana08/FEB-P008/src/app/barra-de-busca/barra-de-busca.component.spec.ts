import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDeBuscaComponent } from './barra-de-busca.component';

describe('BarraDeBuscaComponent', () => {
  let component: BarraDeBuscaComponent;
  let fixture: ComponentFixture<BarraDeBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarraDeBuscaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraDeBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
