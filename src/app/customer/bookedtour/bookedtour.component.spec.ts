import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedtourComponent } from './bookedtour.component';

describe('BookedtourComponent', () => {
  let component: BookedtourComponent;
  let fixture: ComponentFixture<BookedtourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookedtourComponent]
    });
    fixture = TestBed.createComponent(BookedtourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
