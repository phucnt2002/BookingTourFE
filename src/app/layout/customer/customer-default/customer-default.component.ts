import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-default',
  templateUrl: './customer-default.component.html',
  styleUrls: ['./customer-default.component.css']
})
export class CustomerDefaultComponent {
  sideBarOpen = true
  constructor() { }
  ngOnInit(): void {

  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen
  }
}
