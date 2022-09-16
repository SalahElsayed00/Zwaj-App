import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/nav/home/home.component';
import { RegisterComponent } from './components/nav/register/register.component';
import { ErrorInterceptorProvidor } from './services/error.interceptor';
import { AuthService } from './services/Auth.service';
import { AlertifyService } from './services/alertify.service';

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,BrowserAnimationsModule,BsDropdownModule.forRoot()],
  providers: [AuthService, ErrorInterceptorProvidor, AlertifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
