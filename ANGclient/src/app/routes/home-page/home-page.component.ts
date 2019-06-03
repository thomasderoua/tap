/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { IdentityModel } from '../../models/identity.model';
  import { ApiResponseModel } from "../../models/api.reponse.model";
  import { AuthService } from "../../services/auth/auth-service.service";
  import { Router } from "@angular/router";

  // Definition
  @Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    providers: [ AuthService ]
  })
//


/* 
Export
*/
  export class HomePageComponent implements OnInit {

    /* 
    Config.
    */
      // Register form data
      public resetFormDataRegister: Boolean = false;
      public displayReturnRegister: Boolean = false;
      public messageClassRegister: String;
      public apiMessageRegister: String;

      // Login form data
      public resetFormDataLogin: Boolean = false;
      public displayReturnLogin: Boolean = false;
      public messageClassLogin: String;
      public apiMessageLogin: String;

      // Module injection
      constructor(
        private AuthService: AuthService,
        private router: Router
      ) {};
    //


    /*
    Methods
    */
      // Register new user
      public registerUser = (data: IdentityModel) => {
        // Send user data
        this.AuthService.register(data)
        .then( (apiResponse: ApiResponseModel) => {
          // API success response
          this.messageClassRegister = 'success';
          this.apiMessageRegister = apiResponse.message;
          this.displayReturnRegister = true;

          // Reset form data
          this.resetFormDataRegister = true;
        })
        .catch( (apiResponse: ApiResponseModel) => {
          console.log(apiResponse)
          // API error response
          this.messageClassRegister = 'error';
          this.apiMessageRegister = apiResponse.message;
          this.displayReturnRegister = true;
        })
      };

      // Connnect new user
      public connectUser = (data: IdentityModel) => {
        // Send user data
        this.AuthService.login(data)
        .then( (apiResponse: ApiResponseModel) => {
          // API success response
          this.messageClassLogin = 'success';
          this.apiMessageLogin = apiResponse.message;
          this.displayReturnLogin = true;

          // Reset form data
          this.resetFormDataLogin = true;

          setTimeout(() => {
            this.router.navigate(['/me']);
          }, 500);
        })
        .catch( (apiResponse: ApiResponseModel) => {
          console.log(apiResponse)
          // API error response
          this.messageClassLogin = 'error';
          this.apiMessageLogin = apiResponse.message;
          this.displayReturnLogin = true;
        })
      };
    //


    /* 
    Hooks
    */
      ngOnInit() {
      };
    //
  };
//