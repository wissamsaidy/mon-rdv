import { TestBed } from '@angular/core/testing';

import { ConsultationHttpService } from './consultation-http.service';

describe('ConsultationHttpService', () => {
  let service: ConsultationHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultationHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
