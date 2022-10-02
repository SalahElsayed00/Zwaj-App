import { AuthService } from './../../../services/Auth.service';
import {
  Component,
  HostBinding,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
})
export class MemberEditComponent implements OnInit {
  user: User | any;
  @ViewChild('memberEditFrom') memberEditFrom: NgForm | any;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.memberEditFrom.dirty) {
      $event.returnValue = true;
    }
  }
  constructor(
    private route: ActivatedRoute,
    private authservice: AuthService,
    private userservice: UserService,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data) => {
        this.user = data['user'];
      },
    });
  }

  updateUser() {
    this.userservice.updateUser(this.authservice.decodeToken.nameid, this.user)
      .subscribe({
        next: () => {
          this.alertify.success('تم تعديل البيانات بنجاح');
          this.memberEditFrom.reset(this.user);
        },
        error: (error) => {
          this.alertify.error(error);
        },
      });
  }
}
