import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ViewAllTourComponent } from 'src/app/customer/view-all-tour/view-all-tour.component';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private sidebarService: SidebarService) {
   }
  ngOnInit(): void {

  }
  status = true
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    this.sidebarService.toggleSidebar(this.status = !this.status);
  }

  logout() {
    this.router?.navigateByUrl("/login")
    localStorage.removeItem('currentUser');
  }

  
}
