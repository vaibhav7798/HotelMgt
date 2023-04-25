import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { MatButtonModule } from '@angular/material/button';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

@NgModule({
  declarations: [
    UserComponent,
    UserdashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule
  ]
})
export class UserModule { }
