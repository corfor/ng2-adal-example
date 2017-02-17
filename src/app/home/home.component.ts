import { Component, OnInit } from '@angular/core';
import {AdalService} from "ng2-adal/services/adal.service";
import {ProtectedDirective} from "../protected.directive";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private adalService: AdalService) { }

  ngOnInit() {
  }

  public logOut() {
    this.adalService.logOut();
  }
}
