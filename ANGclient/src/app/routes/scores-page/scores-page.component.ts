/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { IdentityModel } from '../../models/identity.model';
  import { ApiResponseModel } from "../../models/api.reponse.model";
  import { ScoresService } from "../../services/scores/scores-service.service";
  import { ActivatedRoute, Router } from '@angular/router';

  // Definition
  @Component({
    selector: 'app-scores-page',
    templateUrl: './scores-page.component.html',
    providers: [ ScoresService ]
  })
//


/* 
Export
*/
  export class ScoresPageComponent implements OnInit {
    private scores = [];
    private sub;
    private newScore;
    /* 
    Config.
    */
      // Module injection
      constructor(
        private route: ActivatedRoute,
        private ScoresService: ScoresService,
      ) {};
    //


    /*
    Methods
    */
    //


    /* 
    Hooks
    */
      ngOnInit() { 
        this.ScoresService.getScores().then( (data) => {
          if (data && data.data && data.data.scores) {
            this.scores = data.data.scores;
          }
        })
        .catch( () => {
          console.warn('fail getting stats');
        })

        this.sub = this.route
          .queryParams
          .subscribe(params => {
            if (params && params.new) {
              this.newScore  = params.new;
            }
          });
      }
    
      ngOnDestroy() {
        this.sub.unsubscribe();
      }
    //
  }
//