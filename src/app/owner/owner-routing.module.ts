import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { OwnerdashboardComponent } from './ownerdashboard/ownerdashboard.component';
import { HotelregistrationComponent } from './hotelregistration/hotelregistration.component';

const routes: Routes = [
  {path:"ownercomponent",component:OwnerComponent},
  {path:'ownerdashboard',component:OwnerdashboardComponent},
  {path:"hotelregistarion",component:HotelregistrationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
