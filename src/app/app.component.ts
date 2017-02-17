import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import {AdalService} from "ng2-adal/services/adal.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private router: Router, private adalService: AdalService) {
    this.isAdalConfigured = environment.adalConfig && environment.adalConfig.clientId != '00000000-0000-0000-0000-000000000000';
    if (this.isAdalConfigured)
    {
      this.adalService.init(environment.adalConfig);

      this.adalService.handleWindowCallback();
      if (this.adalService.userInfo.isAuthenticated) {
        this.router.navigate(['/home']);
      } else
        this.router.navigate(['/welcome']);
    }
  }

  isAdalConfigured: boolean;
}
