import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ViewAllTourComponent } from 'src/app/customer/view-all-tour/view-all-tour.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) {
   }
  ngOnInit(): void {

  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  logout() {
    this.router?.navigateByUrl("/login")
    localStorage.removeItem('currentUser');
  }
}
