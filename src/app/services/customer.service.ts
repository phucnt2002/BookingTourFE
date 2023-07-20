import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseObject } from '../models/response-object';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url = "http://localhost:9090/bookingtour"
  
  constructor(private http: HttpClient) { }

  getAllTour(): Observable<ResponseObject>{
    return this.http.get<ResponseObject>(`${this.url}/admin/getAllTour`);
  }

  createBooking(customerId: number, tourdId: number, booking: Booking): Observable<ResponseObject>{
    return this.http.post<ResponseObject>(`${this.url}/customer/createBooking?tourId=${tourdId}&customerId=${customerId}`, booking);
  }
}
