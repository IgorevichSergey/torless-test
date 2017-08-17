import { TestBed, inject } from '@angular/core/testing';

import { CafeteriaService } from './cafeteria.service';

describe('CafeteriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CafeteriaService]
    });
  });

  it('should be created', inject([CafeteriaService], (service: CafeteriaService) => {
    expect(service).toBeTruthy();
  }));
});
