import { TestBed, inject } from '@angular/core/testing';

import { TimeSelectService } from './time-select.service';

describe('TimeSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeSelectService]
    });
  });

  it('should be created', inject([TimeSelectService], (service: TimeSelectService) => {
    expect(service).toBeTruthy();
  }));
});
