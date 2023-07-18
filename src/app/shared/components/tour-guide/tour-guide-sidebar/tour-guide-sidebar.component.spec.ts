import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourGuideSidebarComponent } from './tour-guide-sidebar.component';

describe('TourGuideSidebarComponent', () => {
  let component: TourGuideSidebarComponent;
  let fixture: ComponentFixture<TourGuideSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourGuideSidebarComponent]
    });
    fixture = TestBed.createComponent(TourGuideSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
