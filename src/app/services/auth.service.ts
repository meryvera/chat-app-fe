import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthModel, Token } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public endpoint: string;
  url = "http://localhost:3000";

  constructor(private http: HttpClient) {
      this.endpoint = '/auth'; 
  }

  addUser(data: AuthModel): Observable<Token>{
    return this.http.post<Token>(`${this.url}${this.endpoint}`, data);
  }
}
