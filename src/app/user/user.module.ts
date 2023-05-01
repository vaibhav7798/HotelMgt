import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { MatButtonModule } from '@angular/material/button';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { BooknowComponent } from './booknow/booknow.component';

@NgModule({
  declarations: [
    UserComponent,
    UserdashboardComponent,
    BooknowComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule
  ]
})
export class UserModule { }
