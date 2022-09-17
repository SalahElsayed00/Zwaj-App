import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe({
      next: () => {
        this.alertify.success('تم تسجيل الدخول');
      },
      error: (error) => {
        this.alertify.error(error);
      },
      complete: () => {
        this.router.navigate(['/members']);
      },
    });
  }

  loggedin() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('تم تسجيل الخروج');
    this.router.navigate(['/']);
  }
}
