import { AuthService } from 'src/app/services/Auth.service';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model: any = {};
  constructor(private home: HomeComponent, private authService: AuthService) {}

  ngOnInit() {}
  register() {
    this.authService.register(this.model).subscribe({
      next: () => {console.log('register is done')},
      error: (error) => {console.log(error)},
    })
  }

  cancel() {
    this.home.registerMode = !this.home.registerMode;
  }
}
