import { Component, OnInit } from '@angular/core';
import {AdalService} from "ng2-adal/services/adal.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private adalService: AdalService) { }

  ngOnInit() {
  }
  public logIn() {
    this.adalService.login();
  }
}
