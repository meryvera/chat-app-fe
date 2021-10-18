import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { UserModel } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = "http://localhost:3000/users";

  constructor(private http: HttpClient) {
  }

  addUser(newUser: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>(this.url, newUser);
  }

  // getAllUsers(): Observable<UserDetailModel[]>{
  //   return this.http.get<Array<UserDetailModel>>(`${this.url}${this.endpoint}`);
  // }

  // getUserId(uid: string, token: Token){
  //     return this.http.post<IUserModel>(`${this.url}${this.endpoint}/${uid}`, {
  //         headers: new HttpHeaders({
  //           'Content-Type':  'application/json',
  //           Authorization: `Bearer ${token}`
  //         })
  //     }
  //   );
  // }

  // getCurrentUser(uid: string){
  //   return this.http.get<UserDetailModel>(`${this.url}${this.endpoint}/${uid}`)
  // }

  

}