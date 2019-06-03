/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    // Inner
    import { Routing } from './router';
    import { UserPageComponent } from './user-page.component';
    import { ButtonTapModule } from "../../components/button-tap/module";

//


/* 
Definition 
*/
    @NgModule({
        declarations: [ UserPageComponent ],
        imports: [ 
            CommonModule, 
            Routing,
            ButtonTapModule
        ]
    })
//


/* 
Export 
*/
    export class Module {};
//