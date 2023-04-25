import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner/owner.component';
import { MatButtonModule } from '@angular/material/button';
import { HotelregistrationComponent } from './hotelregistration/hotelregistration.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { OwnerdashboardComponent } from './ownerdashboard/ownerdashboard.component';
import { SharedModule } from '../shared/shared.module'; 
@NgModule({
  declarations: [
    OwnerComponent,
    HotelregistrationComponent,
    OwnerdashboardComponent,


  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatListModule,
    SharedModule
  ]
})
export class OwnerModule { }
