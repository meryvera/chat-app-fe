import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logIn() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    this.router.navigate(['/chat']);
  }

}
