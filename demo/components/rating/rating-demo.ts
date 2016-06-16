import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { RatingComponent } from '../../../ng2-foundation';

@Component({
  selector: 'rating-demo',
  directives: [RatingComponent, FORM_DIRECTIVES, CORE_DIRECTIVES],
  template: require('./rating-demo.html')
})

export class RatingDemoComponent {
  public x:number = 5;
  public y:number = 2;
  public max:number = 10;
  public rate:number = 7;
  public isReadonly:boolean = false;

  public overStar:number;
  public percent:number;

  public ratingStates:any = [
    {stateOn: 'fa-check-circle', stateOff: 'fa-check-circle-o'},
    {stateOn: 'fa-star', stateOff: 'fa-start-o'},
    {stateOn: 'fa-heart', stateOff: 'fa-ban'},
    {stateOn: 'fa-heart'},
    {stateOff: 'fa-power-off'}
  ];

  public hoveringOver(value:number):void {
    this.overStar = value;
    this.percent = 100 * (value / this.max);
  };

  public resetStar():void {
    this.overStar = void 0;
  }
}
