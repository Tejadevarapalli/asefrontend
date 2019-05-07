import { TestBed } from '@angular/core/testing';

import { MongoService } from './mongo.service';

describe('MongoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MongoService = TestBed.get(MongoService);
    expect(service).toBeTruthy();
  });
});
