import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model:any={ sername:null,password:null};
  constructor() { }

  ngOnInit() {
  }
post():void
{
  console.log(this.model);
}
post1(x:any):void
{
  console.log(x);
}
}
