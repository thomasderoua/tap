/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit,Input, Output, EventEmitter, OnChanges } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from "@angular/forms";

  // Inner
  import { IdentityModel } from '../../models/identity.model';

  // Definition
  @Component({
    selector: 'app-form-register',
    templateUrl: './form-register.component.html',
  })
//


/* Export */
  export class FormRegisterComponent implements OnInit, OnChanges {

    /* 
    Config.
    */
      // Input/Output
      @Input() resetFormData: Boolean
      @Output() sendFormData = new EventEmitter();

      // Declaration
      public form: FormGroup;
      public formData: IdentityModel;
      public passwordError: Boolean = false;

      // Instanciation
      constructor(
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
          email: [undefined, Validators.required],
          first_name: [undefined, Validators.required],
          last_name: [undefined, Validators.required],
          password: [undefined, Validators.required],
          securePassword: [undefined, Validators.required]
        });

        // Set form data obbject
        this.formData = {
          email: undefined,
          first_name: undefined,
          last_name: undefined,
          password: undefined,
          securePassword: undefined
        };
      };

      // Submit form
      public submitForm = () => {
        // Check passwords
        if(this.form.value.password !== this.form.value.securePassword){ this.passwordError = true } 
        else{
          // Set login data
          this.formData = {
            email: this.form.value.email,
            first_name: this.form.value.first_name,
            last_name: this.form.value.last_name,
            password: this.form.value.password,
          }

          // Use event emmiter
          this.sendFormData.emit(this.formData);
        };
      };
    //

    /* 
    Hooks
    */
      ngOnInit() {
        this.resetForm();
      };

      ngOnChanges(changes){
        // Reset form data when user is registed
        if( !changes.resetFormData.firstChange && changes.resetFormData.currentValue ){
          this.resetForm();
        };
      };
    //
  };
//