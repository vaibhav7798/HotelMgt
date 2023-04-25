import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonapiservicesService } from '../commonapiservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent {

//   matform!:FormGroup


//   constructor(private fb:FormBuilder)
//   {

//   }

//   ngOnInit()
//   {

//      this.matFormDef();
//   }

   
// matFormDef()
// {
//   this.matform=this.fb.group({
//     fname:['',[Validators.required]],
//     lname:['',[Validators.required]],
//     city:['',[Validators.required]],
//     mobno:['',[Validators.required]],
//     email:['',[Validators.required]],
//     password:['',[Validators.required]],
//     confirmpassword:['',[Validators.required]],
  



//   })
// }

//

signUpForm!:FormGroup;
myimage:string='assets/images/tropicalBg.jpg';
signuser:any;
showPassword: boolean= false;
passMatch: boolean = false;
password:any;
confirmPassword: any;
endpoint:any;
cities:any = [
  {cityName:"Pune",selected : false},
  {cityName:"Nashik",selected : false},
  {cityName:"Satara",selected : false},
  {cityName:"Kolhapur",selected : false}
]
constructor(private fb:FormBuilder,private commonapiservices:CommonapiservicesService,private router:Router)
{

}

ngOnInit()
{  this.endpoint=this.commonapiservices.userjourney;
  this.signupform();
}
  
signupform()
{ 
  this.signUpForm=this.fb.group({
    name:['',[Validators.required,Validators.minLength(5),Validators.pattern('[A-Za-z]*')]],
    mobile:['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]*')]],
    city:['',[Validators.required,Validators.minLength(3)]],
    mobno:['',[Validators.required,Validators.pattern("[0-9]*$"),Validators.maxLength(10)]],
    email:['',[Validators.required,Validators.maxLength(32)]],
    password:['',[Validators.required,,Validators.minLength(8),Validators.pattern('[a-z0-9@#$-]*$')]],
    confirmPassword:['',[Validators.required]],
    gender:[ ],
    TnC:[],
    cities:this.fb.array([]),

  })
}

submit()
{
  this.signuser=this.signUpForm.value.fname;
  console.log("form data",this.signUpForm .value);
   
  // let endpoint="user";
 
  this.commonapiservices.postapicall(this.endpoint,this.signUpForm.value).subscribe(response=>{})
    this.signUpForm.reset();
    if (this.endpoint == "admin") {
      
      this.router.navigateByUrl("/adminmodule/admincomponenet");
    } else if (this.endpoint == "owner") {
      
      this.router.navigateByUrl("/ownermodule/wnercomponent");
    } else
    {
      
      this.router.navigateByUrl("/usermodule/usercomponent")
    }
  
  
}

passwordValidation(pass:any){
  this.password = pass.target.value;
  console.log('password',pass.target.value);
  
  if(this.password == this.confirmPassword  ){
    this.passMatch = false;
  }
  else{
   this.passMatch = true;
  }
}

visiblity(){
  this.showPassword = !this.showPassword;
}


confirmpasswordValidation(confirmpass:any){
  this.confirmPassword = confirmpass.target.value;
  console.log('confirm', confirmpass.target.value);
  
  if(this.password == this.confirmPassword  ){
    this.passMatch = false;
  }
  else{
   this.passMatch = true;
  }
}

onChange(event:any,i:number)
{
  console.log(event.checked,i);
  if(event.checked)
  {
    this.cities.push(event.source.value)
  }
  const cities=(<FormArray>{
    
  })
}



 }
