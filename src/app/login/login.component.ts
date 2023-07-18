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
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string = ''
  password: string = ''
  result?: ResponseObject
  constructor(private adminService: AdminService, private cusService: CustomerService, private tGuideService: TourGuideService, private router: Router) {

  }

  ngOnInit(): void {
    this.submit
  }

  submit(myForm: NgForm) {
    this.username = myForm.value.username
    this.password = myForm.value.password
    const account :Account = new Account(0, this.username, this.password, "", "")
    this.adminService.login(account).subscribe(data => {
    this.result = data
    console.log(data)
      // if (data.getData().role.includes("admin")) {
      //   this.router?.navigateByUrl("operator/view-list-customer")
      // }
      // if (data.includes("customer")) {
      //   this.router?.navigateByUrl("manager/view-list-operator")
      // }
      // if (data.includes("tourguide")) {
      //   this.router?.navigateByUrl("customer/cusdetail")
      // }
    })
  }
}
