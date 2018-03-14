import { TestBed, inject } from '@angular/core/testing';
import { PMOService } from './pmo.service';

describe('PMOService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PMOService]
    });
  });

  it('should ...', inject([PMOService], (service: PMOService) => {
    expect(service).toBeTruthy();
  }));
});