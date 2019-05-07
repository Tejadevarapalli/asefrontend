import { TestBed } from '@angular/core/testing';

import { FireauthService } from './fireauth.service';

describe('FireauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireauthService = TestBed.get(FireauthService);
    expect(service).toBeTruthy();
  });
});
