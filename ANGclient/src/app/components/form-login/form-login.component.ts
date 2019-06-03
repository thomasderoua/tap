/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from "@angular/forms";

  // Inner
  import { IdentityModel } from '../../models/identity.model';

  // Definition
  @Component({
    selector: 'app-form-login',
    templateUrl: './form-login.component.html',
  })
//


/* Export */
  export class FormLoginComponent implements OnInit, OnChanges {

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
          password: [undefined, Validators.required]
        });

        // Set form data obbject
        this.formData = {
          email: undefined,
          password: undefined,
          first_name: undefined,
          last_name: undefined
        };
      };

      // Submit form
      public submitForm = () => {
        // Set form data
        this.formData = {
          email: this.form.value.email,
          password: this.form.value.password,
          first_name: this.form.value.first_name,
          last_name: this.form.value.last_name,
        }

        // Use event emmiter
        this.sendFormData.emit(this.formData);
      };
    //

    /* 
    Hooks
    */
      ngOnInit() {
        this.resetForm();
      };

      ngOnChanges(changes){
        // Reset form data when user is logged
        if( !changes.resetFormData.firstChange && changes.resetFormData.currentValue ){
          this.resetForm();
        };
      };
    //
  };
//