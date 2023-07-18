// models/booking.model.ts

import { Tour } from "./tour";
import { Customer } from './customer';

export class Booking {
  id: number;
  bookingDate: Date;
  note: string;
  tour: Tour;
  customer: Customer;

  constructor(id: number, bookingDate: Date, note: string, tour: Tour, customer: Customer) {
    this.id = id;
    this.bookingDate = bookingDate;
    this.note = note;
    this.tour = tour;
    this.customer = customer;
  }
}

