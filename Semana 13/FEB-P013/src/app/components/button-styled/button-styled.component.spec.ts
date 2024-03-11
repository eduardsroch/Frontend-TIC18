import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStyledComponent } from './button-styled.component';

describe('ButtonStyledComponent', () => {
  let component: ButtonStyledComponent;
  let fixture: ComponentFixture<ButtonStyledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonStyledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonStyledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
