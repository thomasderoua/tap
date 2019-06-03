import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from "@angular/router";
import { AuthService } from "../../services/auth/auth-service.service";
import { ApiResponseModel } from "../../models/api.reponse.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  public user;
  public page;

  constructor(
    private router: Router,
    private AuthService: AuthService,
  ) {};

  public logout = () => {
    this.AuthService.logout()
    .then( () => {
      this.router.navigate(['/']);
    })
    .catch( () => {
      console.warn('fail logout')
    })
  }

  public getUserData = () => {
    this.AuthService.getUserId().then( (apiResponse: ApiResponseModel) => {
      if (apiResponse && apiResponse.data) {
        this.user = apiResponse.data;
      }
    })
    .catch( (apiResponse: ApiResponseModel) => {
      this.user = null;
    })
  }

  ngOnInit() {
   this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getUserData();
        this.page = event.url;
      }
    });
  }
}
