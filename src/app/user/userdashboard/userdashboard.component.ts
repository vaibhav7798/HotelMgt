import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss']
})
export class UserdashboardComponent {

   constructor(private router:Router)
   {}


  viewhotellist()
  {
    this.router.navigateByUrl("/hoteldetails");
  }


}
