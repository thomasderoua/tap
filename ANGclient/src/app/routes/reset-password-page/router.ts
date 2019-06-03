/* 
Imports 
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { ResetPasswordPageComponent } from './reset-password-page.component';
//


/* 
Definition 
*/
    const route: Routes = [
        {
            path: '',
            component: ResetPasswordPageComponent
        }
    ];
//


/* 
Export 
*/
    export const Routing: ModuleWithProviders = RouterModule.forChild(route);
//