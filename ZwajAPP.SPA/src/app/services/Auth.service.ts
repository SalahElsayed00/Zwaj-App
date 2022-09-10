import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl:string='http://localhost:5000/api/auth/';
constructor(private http:HttpClient) {}

login(model:any){
  return this.http.post(this.baseUrl+'login',model).pipe(
    map((response:any)=>{
      if(response){
        localStorage.setItem('token',response.token)
      }
  }))
}};
