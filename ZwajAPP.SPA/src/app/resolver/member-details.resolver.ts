import { catchError } from 'rxjs/operators';
import { AlertifyService } from './../services/alertify.service';
import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { NEVER, Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class MemberDetailsResolver implements Resolve<User | null> {
  constructor(
    private userService: UserService,
    private router: Router,
    private alertify: AlertifyService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<User | null> {
    return this.userService.getUser(route.params['id']).pipe(
      catchError((error) => {
        this.alertify.error('يوجد مشكلة في عرض البيانات');
        this.router.navigate(['/members']);
        return of(null);
      })
    );
  }
}
