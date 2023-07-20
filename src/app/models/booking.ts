// models/booking.model.ts

import { Tour } from "./tour";
import { Customer } from './customer';

export class Booking {
  id: number;
  bookingDate: Date;
  nameCustomer: string;
  phoneNumber: string;
  email: string;
  note: string;
  tour: Tour;
  customer: Customer;
  constructor(){
    this.id = 0
    this.bookingDate = new Date();
    this.nameCustomer = "";
    this.email = "";
    this.phoneNumber = "";
    this.note = '';
    this.tour = new Tour();
    this.customer = new Customer();
  }

  // constructor(id: number, bookingDate: Date, note: string, tour: Tour, customer: Customer) {
  //   this.id = id;
  //   this.bookingDate = bookingDate;
  //   this.note = note;
  //   this.tour = tour;
  //   this.customer = customer;
  // }
}

