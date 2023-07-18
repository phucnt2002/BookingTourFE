import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourGuideDefaultComponent } from './tour-guide-default.component';

describe('TourGuideDefaultComponent', () => {
  let component: TourGuideDefaultComponent;
  let fixture: ComponentFixture<TourGuideDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourGuideDefaultComponent]
    });
    fixture = TestBed.createComponent(TourGuideDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
