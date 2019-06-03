/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { HttpClientModule } from '@angular/common/http';
    import { CommonModule } from '@angular/common';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';

    // Inner
    import { FormResponseComponent } from "./form-response.component";
// 


/* 
Definition & export 
*/
    @NgModule({
        declarations: [ FormResponseComponent ],
        imports: [ 
            CommonModule, 
            HttpClientModule,
            FormsModule, 
            ReactiveFormsModule
        ],
        exports: [ FormResponseComponent ]
    })

    export class FormResponseModule {};
//