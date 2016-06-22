import {
  Component, ChangeDetectorRef, ElementRef, Inject, AfterViewInit
} from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { positionService } from '../position';
import { TooltipOptions } from './tooltip-options.class';

@Component({
  selector: 'tooltip-container',
  directives: [NgClass, NgStyle],
  template: `<div class="tooltip" role="tooltip"
     [ngStyle]="{top: top, left: left, display: display}"
     [ngClass]="classMap"
     placement="placement"
     is-open="tt_isOpen">
      {{content}}
    </div>`
})
export class TooltipContainerComponent implements AfterViewInit {
  /* tslint:disable */
  private classMap:any;
  private top:string = '-1000px';
  private left:string = '-1000px';
  private display:string = 'block';
  private content:string;
  private placement:string;
  private popupClass:string;
  private animation:boolean;
  private isOpen:boolean;
  private appendToBody:boolean;
  private hostEl:ElementRef;
  /* tslint:enable */

  private element:ElementRef;
  private cdr:ChangeDetectorRef;

  public constructor(element:ElementRef,
                     cdr:ChangeDetectorRef,
                     @Inject(TooltipOptions) options:TooltipOptions) {
    this.element = element;
    this.cdr = cdr;
    Object.assign(this, options);
    this.classMap = {'in': false, 'fade': false};
    this.classMap[options.placement] = true;
  }

  public ngAfterViewInit():void {
    let p = positionService
      .positionElements(
        this.hostEl.nativeElement,
        this.element.nativeElement.children[0],
        this.placement, this.appendToBody);
    this.top = p.top + 'px';
    this.left = p.left + 'px';
    this.classMap.in = true;
    if (this.animation) {
      this.classMap.fade = true;
    }

    this.cdr.detectChanges();
  }
}