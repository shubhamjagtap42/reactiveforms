import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor(private http:HttpClient) { }


  clkevent(){
    alert("hello")
  }




  conduct="laptop"
}
