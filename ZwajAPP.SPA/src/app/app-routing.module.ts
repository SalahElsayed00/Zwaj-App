import { MemberEditResolver } from './resolver/member-edit.resolver';
import { MemberEditComponent } from './components/members/member-edit/member-edit.component';
import { MemberDetailsResolver } from './resolver/member-details.resolver';
import { MemberDetailsComponent } from './components/members/member-details/member-details.component';
import { AuthGuard } from './guards/auth.guard';
import { MessagesComponent } from './components/messages/messages.component';
import { LikeListsComponent } from './components/like-Lists/like-Lists.component';
import { MemberListComponent } from './components/members/member-list/member-list.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { PreventsUnsavedChangesGuard } from './guards/prevents-unsaved-changes.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MemberListComponent },
      {
        path: 'member/edit',
        component: MemberEditComponent,
        resolve: { user: MemberEditResolver },
        canDeactivate: [PreventsUnsavedChangesGuard],
      },
      {
        path: 'members/:id',
        component: MemberDetailsComponent,
        resolve: { user: MemberDetailsResolver },
      },
      { path: 'like', component: LikeListsComponent },
      { path: 'messages', component: MessagesComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
