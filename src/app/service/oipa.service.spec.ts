import { TestBed } from '@angular/core/testing';

import { OipaService } from './oipa.service';

describe('OipaService', () => {
  let service: OipaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OipaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
