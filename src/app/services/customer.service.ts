import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseObject } from '../models/response-object';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url = "http://localhost:9090/bookingtour"
  
  constructor(private http: HttpClient) { }

  getAllTour(): Observable<ResponseObject>{
    return this.http.get<ResponseObject>(`${this.url}/admin/getAllTour`);
  }
}
