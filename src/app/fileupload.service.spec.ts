import { TestBed } from '@angular/core/testing';

import { FileuploadService } from './fileupload.service';

describe('FileuploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileuploadService = TestBed.get(FileuploadService);
    expect(service).toBeTruthy();
  });
});
