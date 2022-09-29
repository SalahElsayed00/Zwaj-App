import { User } from '../../../models/user';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  users: User[] | any;
  constructor(
    private userservice: UserService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.userservice.getUsers().subscribe({
      next: (user: User[]) => {
        this.users = user;
      },
      error: (error) => {
        this.alertify.error(error);
      },
    });
  }
}
