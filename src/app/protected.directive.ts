import {Directive} from '@angular/core';
import {AdalService} from "ng2-adal/services/adal.service";
import {Router} from "@angular/router";

@Directive({
  selector: '[appProtected]'
})
export class ProtectedDirective {

  constructor(private adalService: AdalService, private router:Router) {
    if (!this.adalService.userInfo.isAuthenticated) {
      location.replace('/');
      this.router.navigate(['/welcome']);
    }
  }
}
