import { TestBed } from '@angular/core/testing';

import { NgxVanillaMdcService } from './ngx-vanilla-mdc.service';

describe('NgxVanillaMdcService', () => {
  let service: NgxVanillaMdcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxVanillaMdcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
