import { Component, OnInit } from '@angular/core';
import { ResponseObject } from 'src/app/models/response-object';
import { Tour } from 'src/app/models/tour';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-manage-tour',
  templateUrl: './manage-tour.component.html',
  styleUrls: ['./manage-tour.component.css']
})
export class ManageTourComponent implements OnInit {
  constructor(private customerService: CustomerService){

  }
  displayedColumns: string[] = ['id', 'tourName', 'price', 'dateStart', 'dateEnd', 'action'];


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  result: Tour[] = [];
  blockAccount(id:number){
    
  }

  onReady() {
    this.customerService.getAllTour().subscribe(
      (response: ResponseObject) => {
        this.result = response.data;
        console.log(this.result)
      },
      (error: any) => {
      }
    );
  }
}
