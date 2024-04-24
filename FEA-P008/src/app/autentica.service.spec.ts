import { TestBed, inject } from '@angular/core/testing';

import { AutenticaService } from './autentica.service';

describe('Service: Autentica', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[AutenticaService]
    });
  });

  it('should ...', inject([AutenticaService], (service: AutenticaService) => {
    expect(service).toBeTruthy();
  }));
});
