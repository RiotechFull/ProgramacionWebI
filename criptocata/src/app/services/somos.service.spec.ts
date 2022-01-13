import { TestBed } from '@angular/core/testing';

import { SomosService } from './somos.service';

describe('SomosService', () => {
  let service: SomosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
