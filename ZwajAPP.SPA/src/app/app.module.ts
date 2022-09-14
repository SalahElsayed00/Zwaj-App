import { AuthService } from './services/Auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/nav/home/home.component';
import { RegisterComponent } from './components/nav/register/register.component';
import {ErrorInterceptorProvidor } from './services/error.interceptor';

@NgModule({
  declarations: [	
    AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,ErrorInterceptorProvidor],
  bootstrap: [AppComponent]
})
export class AppModule { }
