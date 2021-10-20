import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/app/services/auth.service';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { SocketService } from 'src/app/services/socket.service';

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
    private socketService: SocketService,
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

      const auth =  localStorage.getItem('newToken')

      // let  socketServiceVarible = this.socketService.io;
      // socketServiceVarible.auth = ({auth});

      // console.log(socketServiceVarible)

      // console.log(this.socketService.io);
      
      console.warn(this.loginForm.value);
      this.router.navigate(['/chat']);
   })   
    
  }

}
