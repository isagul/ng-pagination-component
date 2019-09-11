import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPaginationComponentComponent } from './ng-pagination-component.component';

describe('NgPaginationComponentComponent', () => {
  let component: NgPaginationComponentComponent;
  let fixture: ComponentFixture<NgPaginationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPaginationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPaginationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
