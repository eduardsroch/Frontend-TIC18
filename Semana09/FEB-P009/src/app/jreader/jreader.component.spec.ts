import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JReaderComponent } from './jreader.component';

describe('JreaderComponent', () => {
  let component: JReaderComponent;
  let fixture: ComponentFixture<JReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JReaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
