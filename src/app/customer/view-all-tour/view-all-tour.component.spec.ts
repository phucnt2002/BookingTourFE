import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTourComponent } from './view-all-tour.component';

describe('ViewAllTourComponent', () => {
  let component: ViewAllTourComponent;
  let fixture: ComponentFixture<ViewAllTourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllTourComponent]
    });
    fixture = TestBed.createComponent(ViewAllTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
