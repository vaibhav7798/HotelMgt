import { Component } from '@angular/core';
import { CommonapiservicesService } from '../commonapiservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hoteldetails',
  templateUrl: './hoteldetails.component.html',
  styleUrls: ['./hoteldetails.component.scss']
})
export class HoteldetailsComponent {

  hoteldetails:any;
  tableHeadings=["ownerName","hotelName","hotelAddress","hotelMobile","hotelMenu"];
  endpoint!:any;
  hotelEndPoint="hotelDetails";
  inputBoxValue:any;

  constructor(private commonapiservicesService:CommonapiservicesService,private router:Router)
{
}


ngOnInit()
{
   this.endpoint=this.commonapiservicesService.userjourney;
   //this.endpoint='admin';
  this.getHotelDetails();
}

async getHotelDetails()
{
 
  this.hoteldetails=await this.commonapiservicesService.getapicall(this.hotelEndPoint).toPromise();
  console.log("hotel details:",this.hoteldetails);
}

async deleteapi(id:number)
{
  console.log("deleteapi");
  await this.commonapiservicesService.deleteapicall(this.hotelEndPoint,id).toPromise();
  this.getHotelDetails();
}

back()
{
  if(this.endpoint=='admin')
  {
    this.router.navigateByUrl("/adminmodule/admindashboardcomponent");
  }else if(this.endpoint=='owner')
  {
    this.router.navigateByUrl("/ownermodule/ownerdashboard");
  }
  else{
    this.router.navigateByUrl("/usermodule/userdashboard");
  }
}


}
