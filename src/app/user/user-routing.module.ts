import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { BooknowComponent } from './booknow/booknow.component';

const routes: Routes = [
  {path:"usercomponent",component:UserComponent},
  {path:"userdashboard",component:UserdashboardComponent},
  {path:"booknow",component:BooknowComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
