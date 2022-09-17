import { AuthGuard } from './guards/auth.guard';
import { MessagesComponent } from './components/messages/messages.component';
import { LikeListsComponent } from './components/like-Lists/like-Lists.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers:'always',
    canActivate:[AuthGuard],
    children:[
      { path: 'members', component: MemberListComponent },
      { path: 'like', component: LikeListsComponent },
      { path: 'messages',component: MessagesComponent,},
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
