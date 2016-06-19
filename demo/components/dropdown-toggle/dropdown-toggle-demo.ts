import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DROPDOWN_DIRECTIVES } from '../../../ng2-foundation';

@Component({
  selector: 'dropdown-toggle-demo',
  directives: [DROPDOWN_DIRECTIVES, CORE_DIRECTIVES],
  template: require('./dropdown-toggle-demo.html')
})

export class DropdownToggleDemoComponent {
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public items:Array<string> = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];
  public linkItems:any = [{
    label: 'Google',
    url: 'http://google.com'
  }, {
    label: 'AltaVista',
    url: 'http://altavista.com'
  }];

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
}
