import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSidebarComponent } from './customer-sidebar.component';

describe('CustomerSidebarComponent', () => {
  let component: CustomerSidebarComponent;
  let fixture: ComponentFixture<CustomerSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerSidebarComponent]
    });
    fixture = TestBed.createComponent(CustomerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
