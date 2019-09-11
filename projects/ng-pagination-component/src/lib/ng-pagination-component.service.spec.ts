import { TestBed } from '@angular/core/testing';

import { NgPaginationComponentService } from './ng-pagination-component.service';

describe('NgPaginationComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgPaginationComponentService = TestBed.get(NgPaginationComponentService);
    expect(service).toBeTruthy();
  });
});
