import { TestBed } from '@angular/core/testing';

import { CreneauHttpService } from './creneau-http.service';

describe('CreneauHttpService', () => {
  let service: CreneauHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreneauHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
