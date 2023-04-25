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



  constructor(private router:Router,private fb:FormBuilder,private commonapiservicesService:CommonapiservicesService){}
  ownerdashboardback()
  {
   this.router.navigateByUrl("/ownermodule/ownerdashboard");

  }
   ngOnInit()
   {
    this.hotelRegistration();
   }

   hotelRegistration()
   {
    this.hotelRegistrationForm=this.fb.group({
      hotelname:[''],
      ownername:[''],
      hoteladdress:[],
      hotelMobile:[],
      city:[],
      emailid:[],
      roomAvailable:[],
      hotelMenu:[]
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

}
