import {Component, OnInit} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CustomerService } from 'src/app/services/customer.service';
import { Booking } from 'src/app/models/booking';
import { ActivatedRoute, Router } from '@angular/router';
import { Tour } from 'src/app/models/tour';
import { ResponseObject } from 'src/app/models/response-object';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-book-tour',
  templateUrl: './book-tour.component.html',
  styleUrls: ['./book-tour.component.css'],
})
export class BookTourComponent implements OnInit {
  currentDate = new Date();
  nameCus = ""
  phoneNumber = ""
  email = ""
  note = ""
  booking: Booking  = new Booking()
  item: Tour = new Tour();

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  navigation: any

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) {
    this.navigation = this.router.getCurrentNavigation();

   }

  ngOnInit() {
    if (this.navigation && this.navigation.extras && this.navigation.extras.state) {
      this.item = this.navigation.extras.state['item'];
      console.log('Item:', this.item);
    } else {
      console.log('Item is not available.');
    }
  }
  
  onGetBooking(){
    this.booking.bookingDate = this.currentDate;
    this.booking.note = this.note;
    this.booking.nameCustomer = this.nameCus;
    this.booking.email = this.email;
    this.booking.phoneNumber = this.phoneNumber;
    const account = localStorage.getItem('currentUser');

    if (account) {
      const userData = JSON.parse(account);
        debugger
        this.customerService.createBooking(userData.id, this.item.id, this.booking).subscribe((response: ResponseObject)=>{
        console.log('Booking created:', response);
      },(err: any)=>{
        console.log(err)
      })
    }else{
      alert("Must login")
      this.router.navigate(['/login']);
    }
  }
}
