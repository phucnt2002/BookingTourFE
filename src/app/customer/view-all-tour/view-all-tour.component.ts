import { Component, OnInit } from '@angular/core';
import { ResponseObject } from 'src/app/models/response-object';
import { Tour } from 'src/app/models/tour';
import { CustomerService } from 'src/app/services/customer.service';
import { Location } from 'src/app/models/location';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-all-tour',
  templateUrl: './view-all-tour.component.html',
  styleUrls: ['./view-all-tour.component.css']
})
export class ViewAllTourComponent implements OnInit {
  result?: Tour[];

  constructor(private customerService: CustomerService, private router: Router) {}

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
    if (!locations || locations.length === 0) {
      return 'N/A';
    }
    return locations.map(location => location.country).join(', ');
  }

  bookTour(item: Tour) {
    this.router.navigate(['/customer/book-tour'], { state: { item: item } });
  }
}
