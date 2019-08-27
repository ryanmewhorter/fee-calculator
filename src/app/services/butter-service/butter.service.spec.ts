import { TestBed } from '@angular/core/testing';

import { butterService } from './butter.service';

describe('ButterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service = TestBed.get(butterService);
    expect(service).toBeTruthy();
  });
});
