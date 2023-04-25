import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonapiservicesService } from 'src/app/commonapiservices.service';

@Component({
  selector: 'app-ownerdashboard',
  templateUrl: './ownerdashboard.component.html',
  styleUrls: ['./ownerdashboard.component.scss']
})
export class OwnerdashboardComponent {
ownername:any;
hoteldetails:any;
hotelDetailsByOwner:any=[];
tableHeadings =  ["Owner Name","Hotel Name","hotelAddress",
  "hotelMobile",  "hotelMenu", "roomAvailable","Delete","Edit"];
  inputBoxValue:any;
  hotelEndPoint='hotelDetails';


  constructor(private router:Router,private commonapiservicesService:CommonapiservicesService){}

ngOnInit()
{
    this.ownername=this.commonapiservicesService.ownername;
}

back()
{
 this.router.navigateByUrl("/loginform");
}

hotelregistarion()
{
  this.router.navigateByUrl("ownermodule/hotelregistarion");
}

async viewmyhotellist()
{
   this.hotelDetailsByOwner=[];
   this.hoteldetails=await this.commonapiservicesService.getapicall("hotelDetails").toPromise();
   console.log("hoteldetails:",this.hoteldetails);
   
   if(this.hoteldetails)
   {
    this.hoteldetails.forEach((element:any) => {
      if(element.ownerName==this.ownername)
      {
        this.hotelDetailsByOwner.push(element);
      }
    });
    console.log("hotel details by owner name:",this.hotelDetailsByOwner);
    if(this.hotelDetailsByOwner<=0)
    {
      alert('hotel not found');
    }
   }
   else
    {
      
     console.log("Hotel Not Found");
     alert("Hotel Not Found");
      
    }
  }

viewallmyhotellist()
{
  this.router.navigateByUrl("/hoteldetails");
}

async deleteapi(id:number)
{
  await this.commonapiservicesService.deleteapicall(this.hotelEndPoint,id).toPromise();
  this.viewmyhotellist();
}

edit(id:number)
{

}
}
