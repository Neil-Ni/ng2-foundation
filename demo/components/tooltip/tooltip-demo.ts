import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { TOOLTIP_DIRECTIVES } from '../../../ng2-foundation';

@Component({
  selector: 'tooltip-demo',
  template: require('./tooltip-demo.html'),
  directives: [TOOLTIP_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    /* Specify styling for tooltip contents */
    .tooltip.customClass .tooltip-inner {
        color: #880000;
        background-color: #ffff66;
        box-shadow: 0 6px 12px rgba(0,0,0,.175);
    }
    /* Hide arrow */
    .tooltip.customClass .tooltip-arrow {
        display: none;
    }
  `]
})

export class TooltipDemoComponent {
  public dynamicTooltip:string = 'Hello, World!';
  public dynamicTooltipText:string = 'dynamic';
  public htmlTooltip:string = 'I\'ve been made <b>bold</b>!';
}