import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';
import { Observable } from 'rxjs';
import { ResponseObject } from '../models/response-object';

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
}
