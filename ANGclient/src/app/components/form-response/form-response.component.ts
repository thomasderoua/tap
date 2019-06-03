/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

  // Definition
  @Component({
    selector: 'app-form-response',
    templateUrl: './form-response.component.html',
  })
//


/* Export */
  export class FormResponseComponent implements OnInit {
    /* 
    Config.
    */
      // Input/Output
      @Input() content: String;
      @Output() close = new EventEmitter();
      
      constructor() { }
    //

    /* 
    Hooks
    */
      ngOnInit() {
      }
    //

  }
//