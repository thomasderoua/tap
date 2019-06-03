/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { HttpClientModule } from '@angular/common/http';
    import { CommonModule } from '@angular/common';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';

    // Inner
    import { FormRegisterComponent } from "./form-register.component";
// 


/* 
Definition & export 
*/
    @NgModule({
        declarations: [ FormRegisterComponent ],
        imports: [ 
            CommonModule, 
            HttpClientModule,
            FormsModule, 
            ReactiveFormsModule
        ],
        exports: [ FormRegisterComponent ]
    })

    export class FormRegisterModule {};
//