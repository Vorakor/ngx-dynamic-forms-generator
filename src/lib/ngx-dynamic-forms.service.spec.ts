import { TestBed } from '@angular/core/testing';

import { NgxDynamicFormsService } from './ngx-dynamic-forms.service';

describe('NgxDynamicFormsService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: NgxDynamicFormsService = TestBed.get(NgxDynamicFormsService);
		expect(service).toBeTruthy();
	});
});
