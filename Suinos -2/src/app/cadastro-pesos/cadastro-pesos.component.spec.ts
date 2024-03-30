import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPesosComponent } from './cadastro-pesos.component';

describe('CadastroPesosComponent', () => {
  let component: CadastroPesosComponent;
  let fixture: ComponentFixture<CadastroPesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroPesosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroPesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
