import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommonapiservicesService {

  url="http://localhost:3000/";
  userjourney:any;
  //   userjourney="admin";
    username:any;
    ownername:any;
    editid!:any;
    editjourney:boolean=false;
  hotelDetailsById: any;

  constructor(private http:HttpClient)
   { }
 

//get api call
getapicall(endpoint:any,id?:any)
{
    let updateurl=id? this.url+endpoint + "/" +id:this.url+endpoint;
    //"http://localhost:3000/admin/4" or  http://localhost:3000/admin
    console.log("updateurl:",updateurl);
    
    return this.http.get(updateurl);
}


  postapicall(endpoint:any,data:any)
   { 
       let updateurl=this.url+endpoint;          
      return this.http.post(updateurl,data);
   }

deleteapicall(endpoint:any,id:number)
{
  let updateurl=this.url+endpoint+"/"+id;
  return this.http.delete(updateurl);          
     
}
  }
