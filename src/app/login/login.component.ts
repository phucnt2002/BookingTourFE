import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { TourGuideService } from '../services/tour-guide.service';
import { NgForm } from '@angular/forms';
import { Account } from '../models/account';
import { ResponseObject } from '../models/response-object';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  result?: ResponseObject;
  constructor(
    private adminService: AdminService,
    private cusService: CustomerService,
    private tGuideService: TourGuideService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.submit;
  }

  submit(myForm: NgForm) {
    this.username = myForm.value.username;
    this.password = myForm.value.password;
    const account: Account = new Account();
    account.password = this.password;
    account.userName = this.username;
    this.adminService.login(account).subscribe((data) => {
      this.result = data;
      if (data.status === 'ok' && data.data && data.data.role) {
        let role = data.data.role;
        localStorage.setItem('currentUser', JSON.stringify(data.data));
        if (role.includes('admin')) {
          this.router?.navigateByUrl('admin/view-all-customer');
        }
        if (role.includes('customer')) {
          this.router?.navigateByUrl('customer/view-all-tour');
        }
        if (role.includes('tourguide')) {
          this.router?.navigateByUrl('tourguide/view-list-customer');
        }
      } else {
        console.log(data)
      }
      // if (data.getData().role.includes("admin")) {
      //   this.router?.navigateByUrl("operator/view-list-customer")
      // }
      // if (data.includes("customer")) {
      //   this.router?.navigateByUrl("manager/view-list-operator")
      // }
      // if (data.includes("tourguide")) {
      //   this.router?.navigateByUrl("customer/cusdetail")
      // }
    }, (err:any)=>{
      console.log(err)
    });
  }
}
