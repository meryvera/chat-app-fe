import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/app/services/auth.service';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { SocketService } from 'src/app/services/socket.service';
//import { io } from 'socket.io-client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
  });
  
  constructor(
    private router: Router,
    private authService: AuthService,
    // private socketService: SocketService
    ) { }

  ngOnInit(): void {
  }

  logIn() {
    this.authService.loginUser(this.loginForm.value)
    .pipe(
      catchError((error)=>{
        console.log('ERROR:', error);
        return throwError(error);
      })
    ) 
    .subscribe((response) => {                     
      // const token: any = jwtDecode(response.token);
      localStorage.setItem('newToken', response.token);
      localStorage.getItem('newToken'); 

      // const socket2 = io({
      //   auth: {
      //     token: response
      //   }
      // });
      //console.log('no entiendoooooo =( pero mando socket 2', socket2)//11
        // Socket {connected: false, disconnected: true, receiveBuffer: Array(0), sendBuffer: Array(0), ids: 0, …}
      // client-side

      // console.log(this.socketService) // {io: Socket}
      // console.log(this.socketService.socket) // 222 
        // Socket {connected: true, disconnected: false, receiveBuffer: Array(0), sendBuffer: Array(0), ids: 0, …}
     /*  console.log(this.socket.io.Socket) */
      console.warn(this.loginForm.value);
      this.router.navigate(['/chat']);
   })   
    
  }

}
