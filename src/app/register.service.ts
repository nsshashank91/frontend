import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url='http://localhost:3000/users/register';
  url2='http://localhost:3000/users/login';
  url3='http://localhost:3000/users/user';
  url4='http://localhost:3000/users/logout';
  constructor(private http:HttpClient) { }

  register(user:any){
    return this.http.post(this.url, user,{
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }

 /*  login2(user:any){
    return this.http.post(this.url2, user,{
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  } */

  login(user:any) :Observable<any>{
    return this.http.post<any>(this.url2, user, {
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }

  user(){
    return this.http.get(this.url3, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }

  logout(){
    return this.http.get(this.url4, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }
}
