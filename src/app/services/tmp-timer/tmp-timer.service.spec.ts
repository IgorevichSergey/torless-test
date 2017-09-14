import { TestBed, inject } from '@angular/core/testing';

import { TmpTimerService } from './tmp-timer.service';

describe('TmpTimerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TmpTimerService]
    });
  });

  it('should be created', inject([TmpTimerService], (service: TmpTimerService) => {
    expect(service).toBeTruthy();
  }));
});
