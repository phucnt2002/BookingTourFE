import { Booking } from './booking';
import { Account } from './account';

export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  account: Account;
  booking: Booking[];

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    address: string,
    account: Account,
    booking: Booking[]
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.account = account;
    this.booking = booking;
  }
}