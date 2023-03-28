import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersComponent } from './workers/workers.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    WorkersComponent,
    LoginComponent,
    ForgotpasswordComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WorkersComponent,
    LoginComponent ,
    ForgotpasswordComponent
  ]
})
export class EmployModule {
  
 }
