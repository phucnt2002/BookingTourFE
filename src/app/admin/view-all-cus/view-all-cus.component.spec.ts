import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCusComponent } from './view-all-cus.component';

describe('ViewAllCusComponent', () => {
  let component: ViewAllCusComponent;
  let fixture: ComponentFixture<ViewAllCusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllCusComponent]
    });
    fixture = TestBed.createComponent(ViewAllCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
