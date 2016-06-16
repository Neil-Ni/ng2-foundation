import { Component, Input, HostBinding } from '@angular/core';
import { AccordionPanelComponent } from './accordion-group.component';

// todo: support template url
@Component({
  selector: 'accordion',
  template: `<ul class="accordion"><ng-content></ng-content></ul>`
})

export class AccordionComponent {
  @Input() public closeOthers:boolean;

  /* tslint:disable:no-unused-variable */
  @HostBinding('class.accordian')
  private addClass:boolean = true;
  /* tslint:enable:no-unused-variable */

  private groups:Array<AccordionPanelComponent> = [];

  public closeOtherPanels(openGroup:AccordionPanelComponent):void {
    if (!this.closeOthers) {
      return;
    }

    this.groups.forEach((group:AccordionPanelComponent) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }

  public addGroup(group:AccordionPanelComponent):void {
    this.groups.push(group);
  }

  public removeGroup(group:AccordionPanelComponent):void {
    let index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}
