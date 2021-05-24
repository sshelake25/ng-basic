import { TestBed } from '@angular/core/testing';

import { AutheticationGaurdService } from './authetication-gaurd.service';

describe('AutheticationGaurdService', () => {
  let service: AutheticationGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutheticationGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
