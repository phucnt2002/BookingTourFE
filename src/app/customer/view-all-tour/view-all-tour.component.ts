import { Component, OnInit } from '@angular/core';
import { ResponseObject } from 'src/app/models/response-object';
import { Tour } from 'src/app/models/tour';
import { CustomerService } from 'src/app/services/customer.service';
import { Location } from 'src/app/models/location';
@Component({
  selector: 'app-view-all-tour',
  templateUrl: './view-all-tour.component.html',
  styleUrls: ['./view-all-tour.component.css']
})
export class ViewAllTourComponent implements OnInit {
  result?: Tour[];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.onReady();
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

  getLocation(locations: Location[]): string {
    console.log(locations)
    debugger
    if (!locations || locations.length === 0) {
      return 'N/A';
    }
    return locations.map(location => location.country).join(', ');
  }
}
