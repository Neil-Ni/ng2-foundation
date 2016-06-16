import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { ACCORDION_DIRECTIVES } from '../../../ng2-foundation';

@Component({
  selector: 'accordion-demo',
  directives: [ACCORDION_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
  template: require('./accordion-demo.html')
})

export class AccordionDemoComponent {
  public oneAtATime:boolean = true;
  public items:Array<string> = ['Item 1', 'Item 2', 'Item 3'];

  public status:Object = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  public groups:Array<any> = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  public addItem():void {
    this.items.push(`Items ${this.items.length + 1}`);
  }
}
