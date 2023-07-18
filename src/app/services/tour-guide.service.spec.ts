import { TestBed } from '@angular/core/testing';

import { TourGuideService } from './tour-guide.service';

describe('TourGuideService', () => {
  let service: TourGuideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourGuideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
