import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = environment.apiUrl + 'auth/';
  helper = new JwtHelperService();
  decodeToken: any;
  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        if (response) {
          localStorage.setItem('token', response.token);
          this.decodeToken=this.helper.decodeToken(response.token);
        }
      })
    );
  }
  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

  loggedIn() {
    try {
      const token: any = localStorage.getItem('token');
      return !this.helper.isTokenExpired(token);
    } catch (error) {
      localStorage.removeItem('token');
      return false;
    }
  }
}
