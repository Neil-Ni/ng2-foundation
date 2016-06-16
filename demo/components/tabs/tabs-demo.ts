import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { TAB_DIRECTIVES }  from '../../../ng2-foundation';

@Component({
  selector: 'tabs-demo',
  directives: [TAB_DIRECTIVES, CORE_DIRECTIVES],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: require('./tabs-demo.html')
})

export class TabsDemoComponent {
  public tabs:Array<any> = [
    {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
    {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true},
    {title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true}
  ];

  public alertMe():void {
    setTimeout(function ():void {
      alert('You\'ve selected the alert tab!');
    });
  };

  public setActiveTab(index:number):void {
    this.tabs[index].active = true;
  };

  public removeTabHandler(/*tab:any*/):void {
    console.log('Remove Tab handler');
  };
}
