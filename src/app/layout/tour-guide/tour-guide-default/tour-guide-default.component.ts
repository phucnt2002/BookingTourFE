import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-guide-default',
  templateUrl: './tour-guide-default.component.html',
  styleUrls: ['./tour-guide-default.component.css']
})
export class TourGuideDefaultComponent {
  sideBarOpen = true
  constructor() { }
  ngOnInit(): void {

  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen
  }
}
