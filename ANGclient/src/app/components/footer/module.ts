/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { HttpClientModule } from '@angular/common/http';
    import { CommonModule } from '@angular/common';
    import { RouterModule } from "@angular/router";

    // Inner
    import { FooterComponent } from "./footer.component";
// 


/* 
Definition & export 
*/
    @NgModule({
        declarations: [ FooterComponent ],
        imports: [ 
            CommonModule, 
            RouterModule,
            HttpClientModule
        ],
        exports: [ FooterComponent ]
    })

    export class FooterModule {};
//