import { User } from './../../../models/user';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import {
  NgxGalleryAnimation,
  NgxGalleryImage,
  NgxGalleryOptions,
} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css'],
})
export class MemberDetailsComponent implements OnInit {
  user: User | any;

  galleryOptions: NgxGalleryOptions[] | any;
  galleryImages: NgxGalleryImage[] | any;
  constructor(
    private userservice: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   // this.loadUser();
    this.route.data.subscribe({
      next: (data) => {
        this.user = data['user'];
      },
    });

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false,
      },
    ];

    this.galleryImages = this.getImages();
  }

  getImages() {
    const imageUrls = [];
    for (let i = 0; i < this.user.photos.length; i++) {
      imageUrls.push({
        small: this.user.photos[i].url,
        medium: this.user.photos[i].url,
        big: this.user.photos[i].url,
      });
    }
    return imageUrls;
  }
  // loadUser() {
  //   this.userservice.getUser(+this.route.snapshot.params[`id`]).subscribe({
  //     next: (user: User) => {
  //       this.user = user;
  //     },
  //     error: (error) => {
  //       this.alertify.error(error);
  //     },
  //     complete: () => {
  //       this.alertify.success(`تم جلب بيانات المشترك بنجاح`);
  //     },
  //   });
  // }
}
