import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteuescComponent } from './siteuesc.component';

describe('SiteuescComponent', () => {
  let component: SiteuescComponent;
  let fixture: ComponentFixture<SiteuescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteuescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteuescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
