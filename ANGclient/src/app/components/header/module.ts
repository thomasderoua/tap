/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { HttpClientModule } from '@angular/common/http';
    import { CommonModule } from '@angular/common';
    import { RouterModule } from "@angular/router";

    // Inner
    import { HeaderComponent } from "./header.component";
// 


/* 
Definition & export 
*/
    @NgModule({
        declarations: [ HeaderComponent ],
        imports: [ 
            CommonModule, 
            RouterModule,
            HttpClientModule
        ],
        exports: [ HeaderComponent ]
    })

    export class HeaderModule {};
//