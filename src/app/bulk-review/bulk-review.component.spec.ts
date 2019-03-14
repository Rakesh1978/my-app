import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkReviewComponent } from './bulk-review.component';

describe('BulkReviewComponent', () => {
  let component: BulkReviewComponent;
  let fixture: ComponentFixture<BulkReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
