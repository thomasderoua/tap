import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";

import { ScoresService } from "../../services/scores/scores-service.service";

@Component({
  selector: 'app-button-tap',
  templateUrl: './button-tap.component.html',
  styles: []
})
export class ButtonTapComponent implements OnInit {
  private clicked = 0;
  private playingStatus = 0; // 0 => init | 1 => playing | 2 => ended
  private timerDuration = 10 * 1000;
  private timeout;
  private isActive = false;

  constructor(
    private router: Router,
    private ScoresService: ScoresService,
  ) {};

  private click() {
    if (this.playingStatus === 0) {
      this.playingStatus = 1;
      this.timeout = setTimeout(() => {
        this.playingStatus = 2;
        this.ScoresService.setScore(this.clicked).then((response) => {
          this.router.navigate(['/scores'], { queryParams: { new: response.data._id } });
        })
        .catch( () => {
          console.warn('fail setting stats');
        })

      }, this.timerDuration);
    }
    
    if (this.playingStatus === 1) {
      this.clicked++;
      this.isActive = !this.isActive;
    }
  }


  ngOnInit() {
    this.router.events.subscribe((event) => {
       if (event instanceof NavigationStart) {
         clearTimeout(this.timeout);
       }
     });
   }
}
