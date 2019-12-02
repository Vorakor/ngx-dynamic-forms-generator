import { TestBed } from '@angular/core/testing';

import { NpxDynamicFormsService } from './npx-dynamic-forms.service';

describe('NpxDynamicFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NpxDynamicFormsService = TestBed.get(NpxDynamicFormsService);
    expect(service).toBeTruthy();
  });
});
