import { AuthService } from 'src/app/services/Auth.service';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model: any = {};
  constructor(private home: HomeComponent, private authService: AuthService,private alertify:AlertifyService) {}

  ngOnInit() {}
  register() {
    this.authService.register(this.model).subscribe({
      next: () => {this.alertify.success('تم الاشتراك بنجاح')},
      error: (error) => {this.alertify.error(error)},
    })
  }

  cancel() {
    this.home.registerMode = !this.home.registerMode;
  }
}
