/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit,Input, Output, EventEmitter, OnChanges } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from "@angular/forms";

  // Inner
  import { AuthService } from "../../services/auth/auth-service.service";
  import { ApiResponseModel } from "../../models/api.reponse.model";

  // Definition
  @Component({
    selector: 'app-reset-password-page',
    templateUrl: './reset-password-page.component.html',
    providers: [ AuthService ]
  })
//


/* 
Export 
*/
  export class ResetPasswordPageComponent implements OnInit {
    /* 
    Config.
    */
      // Declaration
      public form: FormGroup;
      public formData: any;
      public passwordError: Boolean = false;
      public resetFormData: Boolean = false;
      public displayReturn: Boolean = false;
      public messageClass: String;
      public apiMessage: String;

      // Instanciation
      constructor(
        private AuthService: AuthService,
        private FormBuilder: FormBuilder
      ) { };
    //

    /* 
    Methods
    */
      // Reset form
      private resetForm = () => {
        // Set validator
        this.form = this.FormBuilder.group({
          password: [undefined, Validators.required],
          newPassword: [undefined, Validators.required],
          secureNewPassword: [undefined, Validators.required]
        });
      };

      // Submit form
      public submitForm = () => {
        // Check passwords
        if(this.form.value.newPassword !== this.form.value.secureNewPassword){ this.passwordError = true } 
        else{
          this.AuthService.restPassword(this.form.value.password, this.form.value.newPassword)
          .then( (apiResponse: ApiResponseModel) => {
            // API success response
            this.messageClass = 'success';
            this.apiMessage = apiResponse.message;
            this.displayReturn = true;

            // Reset form data
            this.resetFormData = true;
          })
          .catch( (apiResponse: ApiResponseModel) => {
            console.log(apiResponse)
            // API error response
            this.messageClass = 'error';
            this.apiMessage = apiResponse.message;
            this.displayReturn = true;
          })
        };
      };
    //

    /* 
    Hooks
    */
      ngOnInit() {
        this.resetForm();
      };
    //
  };
//