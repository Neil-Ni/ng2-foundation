import {
  Component, OnInit, Input, Output, HostListener, Self, EventEmitter
} from '@angular/core';
import { NgFor, ControlValueAccessor, NgModel } from '@angular/common';

@Component({
  /* tslint:disable */
  selector: 'rating[ngModel]',
  /* tslint:enable */
  directives: [NgFor],
  template: `
    <span (mouseleave)="reset()" tabindex="0" role="slider" aria-valuemin="0" [attr.aria-valuemax]="range.length" [attr.aria-valuenow]="value" >
      <template ngFor let-r [ngForOf]="range" let-index="index">
        <i (mouseenter)="enter(index + 1)" (click)="rate(index + 1)" class="fa" [ngClass]="index < value ? r.stateOn : r.stateOff" [title]="r.title" ></i>
      </template>
    </span>
  `
})
export class RatingComponent implements ControlValueAccessor, OnInit {
  @Input() public max:number;
  @Input() public stateOn:string;
  @Input() public stateOff:string;
  @Input() public readonly:boolean;
  @Input() public titles:Array<string>;
  @Input() public ratingStates:Array<{stateOn:string, stateOff:string}>;

  @Output() public onHover:EventEmitter<number> = new EventEmitter(false);
  @Output() public onLeave:EventEmitter<number> = new EventEmitter(false);

  public onChange:any = Function.prototype;
  public onTouched:any = Function.prototype;

  public cd:NgModel;
  private range:Array<any>;
  private value:number;
  private preValue:number;

  public constructor(@Self() cd:NgModel) {
    this.cd = cd;
    cd.valueAccessor = this;
  }

  public ngOnInit():void {
    this.max = typeof this.max !== 'undefined' ? this.max : 5;
    this.readonly = this.readonly === true;
    this.stateOn = typeof this.stateOn !== 'undefined'
      ? this.stateOn
      : 'fa-star';
    this.stateOff = typeof this.stateOff !== 'undefined'
      ? this.stateOff
      : 'fa-star-o';
    this.titles = typeof this.titles !== 'undefined' && this.titles.length > 0
      ? this.titles
      : ['one', 'two', 'three', 'four', 'five'];
    this.range = this.buildTemplateObjects(this.ratingStates, this.max);
  }

  // model -> view
  public writeValue(value:number):void {
    if (value % 1 !== value) {
      this.value = Math.round(value);
      this.preValue = value;
      return;
    }

    this.preValue = value;
    this.value = value;
  }

  protected enter(value:number):void {
    if (!this.readonly) {
      this.value = value;
      this.onHover.emit(value);
    }
  }

  protected reset():void {
    this.value = this.preValue;
    this.onLeave.emit(this.value);
  }

  public registerOnChange(fn:(_:any) => {}):void {this.onChange = fn;}

  public registerOnTouched(fn:() => {}):void {this.onTouched = fn;}

  private buildTemplateObjects(ratingStates:Array<any>, max:number):Array<any> {
    ratingStates = ratingStates || [];
    let count = ratingStates.length || max;
    let result:any[] = [];
    for (let i = 0; i < count; i++) {
      result.push(Object.assign({
        index: i,
        stateOn: this.stateOn,
        stateOff: this.stateOff,
        title: this.titles[i] || i + 1
      }, ratingStates[i] || {}));
    }
    return result;
  }

  private rate(value:number):void {
    if (!this.readonly && value >= 0 && value <= this.range.length) {
      this.writeValue(value);
      this.cd.viewToModelUpdate(value);
    }
  }
}
