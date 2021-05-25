import { TestBed } from '@angular/core/testing';

import { KanjisService } from './kanjis.service';

describe('KanjisService', () => {
  let service: KanjisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanjisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
