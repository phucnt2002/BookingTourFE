import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { ResponseObject } from 'src/app/models/response-object';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-all-cus',
  templateUrl: './view-all-cus.component.html',
  styleUrls: ['./view-all-cus.component.css']
})
export class ViewAllCusComponent implements OnInit {
  result?: any

  displayedColumns: string[] = ['id', 'userName', 'password', 'role', 'status', 'block'];


  constructor(private adminService: AdminService){

  }

  ngOnInit(): void {
    this.onReady()
  }

  onReady(){
    this.adminService.getAccount().subscribe((res: ResponseObject)=>{
      this.result = res.data
    }, (err)=>{
      console.log(err)
    })
  }

  openDialog(account: Account){

  }

  blockAccount(id: number){

  }
}
