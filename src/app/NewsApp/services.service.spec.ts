import { TestBed } from '@angular/core/testing';

import { NewAppService } from './services.service';

describe('ServicesService', () => {
  let service: NewAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
