import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  success: any;

  constructor(private http:HttpClient) { }

  adduser(data:any){
    return this.http.post(`${environment.url}/users`,data)
  }
  
  getAlluser():Observable<any>{
    return this.http.get(`${environment.url}/users`)
  }
  getAlluserByid(id:any){
    return this.http.get(`${environment.url}/users/${id}`)
  }
  doAlldelete(id:any){
    return this.http.delete(`${environment.url}/users/${id}`);
  }
  
  doAllupdate(id:any,data:any){
    return this.http.put(`${environment.url}/users/${id}`,data);
  }
  deletealldata(id:any)
  {
    return this.http.delete(`${environment.url}/users/${id}`)
  }
  
  
}

