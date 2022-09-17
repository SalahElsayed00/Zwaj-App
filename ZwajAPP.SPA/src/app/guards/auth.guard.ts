import { AuthService } from 'src/app/services/Auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authservice: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) {}
  
  canActivate(): boolean {
    if (this.authservice.loggedIn()) {
      return true;
    }
    this.router.navigate(['/']);
    this.alertify.error('قم بتسجيل الدخول اولا');
    return false;
  }
}
