import { TestBed } from '@angular/core/testing';

import { FeeSettingsService } from './fee-settings.service';

describe('FeeSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeeSettingsService = TestBed.get(FeeSettingsService);
    expect(service).toBeTruthy();
  });
});
