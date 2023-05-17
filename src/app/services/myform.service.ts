import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MyformService {
  add(arg0: { severity: string; summary: string; detail: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

   useradd(data:any)
   {
    return this.http.post(`${environment.url}/users`,data)
   }
   addalluser()
   {
    return this.http.get(`${environment.url}/users`)
   }
   adduserbyid(id:any)
   {
    return this.http.get(`${environment.url}/users/${id}`)
   }
   deleteall(id:any)
   {
    return this.http.delete(`${environment.url}/users/${id}`)
   }
   updateadduser(id:any,data:any)
   {
    return this.http.put(`${environment.url}/users/${id}`,data)
   }

   clickevent(){
    alert("hii Anemoi")
   }







   state()
   {
    return [
      {
        id:1,
        name:'maharashtra',
        
      },
      {
        id:2,
        name:'West Bengal',

      }
    ]
   }

   city()
   {
    return [
      {
        id:1,
        name:'Pune',
      },
      {
        id:1,
        name:'Mumbai',
      },
      {
        id:2,
        name:'Kolkata',
      },
      {
        id:2,
        name:'Howra',
      }
    ]
   }













}
