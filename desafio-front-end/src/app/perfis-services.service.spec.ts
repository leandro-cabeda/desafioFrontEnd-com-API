import { TestBed } from '@angular/core/testing';

import { PerfisServicesService } from './perfis-services.service';

describe('PerfisServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfisServicesService = TestBed.get(PerfisServicesService);
    expect(service).toBeTruthy();
  });
});
