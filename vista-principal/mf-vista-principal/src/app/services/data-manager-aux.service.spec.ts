import { TestBed } from '@angular/core/testing';

import { DataManagerAuxService } from './data-manager-aux.service';

describe('DataManagerAuxService', () => {
  let service: DataManagerAuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataManagerAuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
