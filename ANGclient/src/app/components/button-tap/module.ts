/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { HttpClientModule } from '@angular/common/http';
    import { CommonModule } from '@angular/common';
    import { RouterModule } from "@angular/router";

    // Inner
    import { ButtonTapComponent } from "./button-tap.component";
// 


/* 
Definition & export 
*/
    @NgModule({
        declarations: [ ButtonTapComponent ],
        imports: [ 
            CommonModule, 
            RouterModule,
            HttpClientModule
        ],
        exports: [ ButtonTapComponent ]
    })

    export class ButtonTapModule {};
//