import { AuthService } from 'src/app/services/Auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
registerMode:boolean=false;
  constructor(private authservice:AuthService,private route:Router) { }

  ngOnInit() {
    if (this.authservice.loggedIn()) {
      this.route.navigate(['/members']);
    }
  }
  registerToggle(){
    this.registerMode=!this.registerMode;
  }

}
