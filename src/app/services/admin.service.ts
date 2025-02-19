import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';
import { Observable } from 'rxjs';
import { ResponseObject } from '../models/response-object';
import { Tour } from '../models/tour';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = "http://localhost:9090/bookingtour/admin"

  constructor(private http: HttpClient) { }

  login(account: Account): Observable<ResponseObject>{
    return this.http.post<ResponseObject>(`${this.url}/login`, account);
  }

  getAccount():Observable<ResponseObject>{
    return this.http.get<ResponseObject>(`${this.url}/getAccount`);
  }

  uploadFile(file: File) {
    console.log("uploadFile")

    const formData: FormData = new FormData();
    formData.append('image', file, file.name);
    return this.http.post(`${this.url}/upload`, formData, {responseType: 'text'});
  }

  createTour(tour: Tour){
    return this.http.post<ResponseObject>(`${this.url}/createTour`, tour);
  }

  getAllLocation(){
    return this.http.get<ResponseObject>(`${this.url}/getAllLocation`);
  }

  createLocation(location: Location){
    return this.http.post<ResponseObject>(`${this.url}/createLocation`, location)
  }
}
