/* 
Imports 
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { IdentityValidationComponent } from './identity-validation.component';
//


/* 
Definition 
*/
    const route: Routes = [
        {
            path: ':id',
            component: IdentityValidationComponent
        }
    ];
//


/* 
Export 
*/
    export const Routing: ModuleWithProviders = RouterModule.forChild(route);
//