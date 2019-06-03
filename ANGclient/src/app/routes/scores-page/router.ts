/* 
Imports 
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { ScoresPageComponent } from './scores-page.component';
//


/* 
Definition 
*/
    const route: Routes = [
        {
            path: '',
            component: ScoresPageComponent
        }
    ];
//


/* 
Export 
*/
    export const Routing: ModuleWithProviders = RouterModule.forChild(route);
//