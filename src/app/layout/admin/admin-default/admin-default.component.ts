import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-default',
  templateUrl: './admin-default.component.html',
  styleUrls: ['./admin-default.component.css']
})
export class AdminDefaultComponent implements OnInit {
  sideBarOpen = true
  constructor() { }
  ngOnInit(): void {

  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen
  }
}
