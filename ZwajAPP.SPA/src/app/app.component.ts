import { AuthService } from 'src/app/services/Auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(public authService:AuthService){}
  ngOnInit(){
    const token:any = localStorage.getItem('token');
     this.authService.decodeToken=this.authService.helper.decodeToken(token);
  }
  
  
}
