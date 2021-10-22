import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { UserModel } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public endpoint: string;
  url = "http://localhost:3000";

  constructor(private http: HttpClient) {
      this.endpoint = '/users'; // keyword?
  }

  addUser(newUser: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>(`${this.url}${this.endpoint}`, newUser);
  }

}