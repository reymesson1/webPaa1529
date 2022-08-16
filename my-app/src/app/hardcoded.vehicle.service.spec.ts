import { TestBed } from '@angular/core/testing';

import { HardcodedVehicleService } from './hardcoded.vehicle.service';

describe('HardcodedVehicleService', () => {
  let service: HardcodedVehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedVehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
