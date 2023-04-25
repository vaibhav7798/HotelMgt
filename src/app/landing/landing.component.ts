import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonapiservicesService } from '../commonapiservices.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  myimage:string="assets/images/bg.jpg";



 constructor(private commonapiservicesService:CommonapiservicesService,private router:Router)
 {

 }

  // adminpage()
  // {
  //   this.router.navigateByUrl('/adminmodule/admincomponenet');
  // }
 
  // ownerbtn()
  // {
  //   this.router.navigateByUrl("/ownermodule/ownercomponent");
  // }
  // userbtn()
  // {
  //   this.router.navigateByUrl("/usermodule/usercomponent");
  // }

  goOn(data:any)
  {
    this.commonapiservicesService.userjourney=data;
    console.log("in go on");
    
    if(data==="admin")
    {
      this.router.navigateByUrl("/adminmodule/admincomponenet");
    }
    
    else if(data==="owner")
    {
      this.router.navigateByUrl("/ownermodule/ownercomponent");
    }
    else
    {
      this.router.navigateByUrl("/usermodule/usercomponent")
    }

  }




}
