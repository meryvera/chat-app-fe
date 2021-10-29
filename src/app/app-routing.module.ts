import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
//import { ChatBoxComponent } from './components/view general/chat-box/chat-box.component';
import { SignupComponent } from './components/signup/signup.component';
import { ViewGeneralComponent } from './components/view general/view-general/view-general.component';
import { LoggedGuard } from './guard/logged.guard';

const routes: Routes = [
  {
    path:'',
    canActivate: [LoggedGuard],

    component: LoginComponent
  },
  {
    path:'login',
    canActivate: [LoggedGuard],

    component: LoginComponent
  },
  {
    path:'registro',
    canActivate: [LoggedGuard],

    component: SignupComponent
  },
  {
    path:'chat',
    component: ViewGeneralComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppRoutingModule { }
