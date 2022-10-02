import { UserService } from './../services/user.service';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../services/alertify.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from '../services/Auth.service';

@Injectable()
export class MemberEditResolver implements Resolve<User | null> {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) {}
  
  resolve(): Observable<User|null> {
    return this.userService.getUser(this.authService.decodeToken.nameid).pipe(
      catchError((error) => {
        this.alertify.error('يوجد مشكلة في عرض البيانات');
        this.router.navigate(['/members']);
        return of(null);
      })
    );
  }
}
