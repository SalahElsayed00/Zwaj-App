import { AlertifyService, ConfirmResult } from './../services/alertify.service';
import { MemberEditComponent } from './../components/members/member-edit/member-edit.component';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreventsUnsavedChangesGuard
  implements CanDeactivate<MemberEditComponent>
{
  x = false;
  constructor(private alertify: AlertifyService) {}

  async canDeactivate(component: MemberEditComponent) {
    if (component.memberEditFrom.dirty) {
      const confirm = await this.alertify.promisifyConfirm(
        'إنتـبــه',
        'تم تعديل البيانات الخاصة بك هل تود الإستمرار بدون حفظ البيانات'
      );
      console.log('salahaaaaaaaaaaaaaaa');
      if (confirm == ConfirmResult.Ok) {
        this.x = true;
      } else {
        this.x = false;
      }

      return this.x;
    }
    return true;
  }
}
