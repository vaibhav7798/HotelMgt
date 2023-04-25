import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonapiservicesService } from '../commonapiservices.service';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent {

  loginform!:FormGroup;
  loginuser!:string;
  journey:any;
  userdata:any;

  constructor(private commonapiservicesService:CommonapiservicesService ,private formBuilder:FormBuilder,private http:HttpClient,private router:Router)
{}

ngOnInit()
{
  this.journey=this.commonapiservicesService.userjourney;
  this.loginDef();
}

loginDef()
{
   this.loginform=this.formBuilder.group({
     fname:['',[]],
     password:['',[]]
   })

}
  
async submit()
   {
   this.loginuser=this.loginform.value.fname;
  console.log("crendentials data",this.loginform.value);
   
  // this.http.get<any>("http://localhost:3000/admin").subscribe(Response=>{
  //     const user=Response.find((a:any)=>{
  //       return a.fname===this.loginform.value.fname && a.password===this.loginform.value.password
  //     });


   this.userdata=await  this.commonapiservicesService.getapicall(this.journey).toPromise();
                       console.log("userdata:",this.userdata);
                                      
                var user= this.userdata.find((ele:any)=>{
                   return ele.fname===this.loginform.value.fname && ele.password===this.loginform.value.password  
                 })   


    if (user) {
     
       if (this.journey == "admin") {
        alert("Login Sucess");
        this.router.navigateByUrl("/adminmodule/admindashboardcomponent");
      } else if (this.journey == "owner") {
        alert("Login Sucess");
          this.commonapiservicesService.ownername=this.loginform.value.fname;
        this.router.navigateByUrl("/ownermodule/ownerdashboard");
      } else
      {
        alert("Login Sucess");
        this.router.navigateByUrl("/usermodule/userdashboard")
      }
    } else {
      alert("User Not Found,Plz Try Again!!!");
   this.loginform.reset();      
      this.router.navigateByUrl("/signupform");
    }
  }

back()
{
   if(this.journey=='admin')
   {this.router.navigateByUrl("adminmodule/admincomponenet")}
   else if(this.journey=='owner')
   {
    this.router.navigateByUrl("/ownermodule/ownercomponent");
   }
   else
   {
    this.router.navigateByUrl("/usermodule/usercomponent");
   }

      

  }



}    
  