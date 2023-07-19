import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadTourComponent } from './lead-tour.component';

describe('LeadTourComponent', () => {
  let component: LeadTourComponent;
  let fixture: ComponentFixture<LeadTourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadTourComponent]
    });
    fixture = TestBed.createComponent(LeadTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
