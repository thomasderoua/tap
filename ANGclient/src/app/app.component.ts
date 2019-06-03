/* 
Imports 
*/
  import { Component } from '@angular/core';
//


/* 
Definition
*/
  @Component({
    selector: 'app-root',
    template: `
      <header>
        <app-header></app-header>
      </header>
      
      <main class="maxWidth">
        <router-outlet></router-outlet>
      </main>
      <footer>
        <app-footer></app-footer>
      </footer>
    `,
  })
//

/* 
Export
*/
  export class AppComponent {
    title = 'ANGclient';
  }
//