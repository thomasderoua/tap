/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    // Inner
    import { Routing } from './router';
    import { ScoresPageComponent } from './scores-page.component';

//


/* 
Definition 
*/
    @NgModule({
        declarations: [ ScoresPageComponent ],
        imports: [ 
            CommonModule, 
            Routing,
        ]
    })
//


/* 
Export 
*/
    export class Module {};
//