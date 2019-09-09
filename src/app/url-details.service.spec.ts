import { TestBed } from '@angular/core/testing';

import { UrlDetailsService } from './url-details.service';

describe('UrlDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlDetailsService = TestBed.get(UrlDetailsService);
    expect(service).toBeTruthy();
  });
});
