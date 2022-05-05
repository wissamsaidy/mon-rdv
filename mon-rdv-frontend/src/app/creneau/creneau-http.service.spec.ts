import { TestBed } from '@angular/core/testing';

import { CreneauHTTPService } from './creneau-http.service';

describe('CreneauHTTPService', () => {
  let service: CreneauHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreneauHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
