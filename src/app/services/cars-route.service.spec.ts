import { TestBed } from '@angular/core/testing';

import { CarsRouteService } from './cars-route.service';

describe('CarsRouteService', () => {
  let service: CarsRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
