import { PreventsUnsavedChangesGuard } from './guards/prevents-unsaved-changes.guard';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule} from '@kolkov/ngx-gallery';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LikeListsComponent } from './components/like-Lists/like-Lists.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MemberListComponent } from './components/members/member-list/member-list.component';
import { ErrorInterceptorProvidor } from './services/error.interceptor';
import { AuthService } from './services/Auth.service';
import { AlertifyService } from './services/alertify.service';
import { MemberCardComponent } from './components/members/member-card/member-card.component';
import { MemberDetailsComponent } from './components/members/member-details/member-details.component';
import { MemberEditComponent } from './components/members/member-edit/member-edit.component';
import { MemberEditResolver } from './resolver/member-edit.resolver';
import { MemberDetailsResolver } from './resolver/member-details.resolver';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, RegisterComponent,MemberListComponent,MessagesComponent,LikeListsComponent, MemberCardComponent, MemberDetailsComponent,MemberEditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxGalleryModule ,
    BsDropdownModule.forRoot(),
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5000"],
        disallowedRoutes: ["localhost:5000/api/auth"],
      }
    }),
    TabsModule.forRoot(),
    
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvidor,
    AlertifyService,
    AuthGuard,
    PreventsUnsavedChangesGuard,
    UserService,
    MemberDetailsResolver,
    MemberEditResolver,
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
