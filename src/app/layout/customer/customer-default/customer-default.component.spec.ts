import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDefaultComponent } from './customer-default.component';

describe('CustomerDefaultComponent', () => {
  let component: CustomerDefaultComponent;
  let fixture: ComponentFixture<CustomerDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDefaultComponent]
    });
    fixture = TestBed.createComponent(CustomerDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
