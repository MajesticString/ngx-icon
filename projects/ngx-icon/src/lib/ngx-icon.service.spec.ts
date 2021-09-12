import { TestBed } from '@angular/core/testing';

import { NgxIconService } from './ngx-icon.service';

describe('NgxIconService', () => {
  let service: NgxIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
