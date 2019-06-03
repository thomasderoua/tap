/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { FormBuilder, FormGroup, Validators } from "@angular/forms";

  // Inner
  import { IdentityModel } from '../../models/identity.model';
  import { ApiResponseModel } from "../../models/api.reponse.model";
  import { AuthService } from "../../services/auth/auth-service.service";

  @Component({
    selector: 'app-identity-validation',
    templateUrl: './identity-validation.component.html',
    providers: [ AuthService ]
  })
//


/* 
Export
*/
  export class IdentityValidationComponent implements OnInit {
    /* 
    Config.
    */
      // Declaration
      private userId: String;
      public form: FormGroup;
      public resetFormData: Boolean = false;
      public displayReturn: Boolean = false;
      public messageClass: String;
      public apiMessage: String;

      // Module injection
      constructor(
        private ActivatedRoute: ActivatedRoute,
        private AuthService: AuthService,
        private FormBuilder: FormBuilder
      ) {};
    //


    /*
    Methods
    */
        // Reset form
        private resetForm = () => {
          // Set validator
          this.form = this.FormBuilder.group({
            password: [undefined, Validators.required],
          });
        };

        // Get route param
        private extractParam = () => {
          this.ActivatedRoute.params.forEach( param => {
            this.userId = param.id
          });
        };

        // Check identity
        private submitForm = () => {
          this.AuthService.identityValidation(this.userId, this.form.value.password)
          .then( (apiResponse: ApiResponseModel) => {
            // API success response
            this.messageClass = 'success';
            this.apiMessage = apiResponse.message;
            this.displayReturn = true;

            // Reset form data
            this.resetForm();
          })
          .catch( (apiResponse: ApiResponseModel) => {
            // API error response
            this.messageClass = 'error';
            this.apiMessage = apiResponse.message;
            this.displayReturn = true;
          })
        }
    //


    /* 
    Hooks
    */
      ngOnInit() {
        // Reset form data
        this.resetForm();

        // Get identity ID
        this.extractParam();
      };
    //
  }
//