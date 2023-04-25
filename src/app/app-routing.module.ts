import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SignupformComponent } from './signupform/signupform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { HoteldetailsComponent } from './hoteldetails/hoteldetails.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'landing',component:LandingComponent},
  {path:'signupform',component:SignupformComponent},
  {path:'loginform',component:LoginformComponent},
  {path:"hoteldetails",component:HoteldetailsComponent},


   
  {path:"adminmodule",loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
   {path:"ownermodule",loadChildren:()=>import('./owner/owner.module').then(m=>m.OwnerModule)},
  {path:"usermodule",loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  
   



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
