import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonapiservicesService } from 'src/app/commonapiservices.service';

@Component({
  selector: 'app-hotelregistration',
  templateUrl: './hotelregistration.component.html',
  styleUrls: ['./hotelregistration.component.scss']
})
export class HotelregistrationComponent {

  hotelRegistrationForm! :FormGroup;
  iseditjourney!:boolean;
  editid:any;
  hoteldetailsbyid:any;
  constructor(private router:Router,private fb:FormBuilder,private commonapiservicesService:CommonapiservicesService){}
  ownerdashboardback()
  {
   this.router.navigateByUrl("/ownermodule/ownerdashboard");

  }
   ngOnInit()
   {
    this.iseditjourney=this.commonapiservicesService.editjourney;
    this.editid=this.commonapiservicesService.editid;
      if(this.iseditjourney)
      {
        this.gethoteldetailsbyID();
      }
    
    this.hotelRegistration();
   }

   hotelRegistration()
   {
    this.hotelRegistrationForm=this.fb.group({
      hotelname:[this.hoteldetailsbyid ? this.hoteldetailsbyid.hotelname:''],
      ownername:[this.hoteldetailsbyid ? this.hoteldetailsbyid.ownername:''],
      hoteladdress:[this.hoteldetailsbyid ? this.hoteldetailsbyid.hoteladdress:''],
      hotelMobile:[this.hoteldetailsbyid ? this.hoteldetailsbyid.hotelMobile:''],
      city:[''],
      emailid:[''],
      roomAvailable:[this.hoteldetailsbyid ? this.hoteldetailsbyid.roomAvailable:''],
      hotelMenu:[this.hoteldetailsbyid ? this.hoteldetailsbyid.hotelMenu:'']
    })

   }

submit()
{
  console.log("hotel registartion:",this.hotelRegistrationForm.value);
  
   this.commonapiservicesService.postapicall("hotelDetails",this.hotelRegistrationForm.value).subscribe(Response=>{})
  this.hotelRegistrationForm.reset();
  alert("hotel record has been successfully saved!");

  this.router.navigateByUrl("/ownermodule/ownerdashboard");
}

async gethoteldetailsbyID()
{
  this.hoteldetailsbyid=await this.commonapiservicesService.getapicall("hotelDetails",this.editid).toPromise();  
 console.log('hoteldetailsbyid',this.hoteldetailsbyid);
 
}
}
