import { TestBed, inject } from '@angular/core/testing';
import { PMODataService} from './pmo-data.service';

describe('PMODataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PMODataService]
    });
  });

  it('should ...', inject([PMODataService], (service: PMODataService) => {
    expect(service).toBeTruthy();
  }));
});
