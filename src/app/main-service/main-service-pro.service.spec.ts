import { TestBed } from '@angular/core/testing';

import { MainServiceProService } from './main-service-pro.service';

describe('MainServiceProService', () => {
  let service: MainServiceProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainServiceProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
