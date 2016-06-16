import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {BUTTON_DIRECTIVES} from '../../../ng2-foundation';

@Component({
  selector: 'buttons-demo',
  directives: [BUTTON_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
  template: require('./buttons-demo.html')
})
export class ButtonsDemoComponent {
  public singleModel:string = '1';
  public radioModel:string = 'Middle';
  public checkModel:any = {
    left: false,
    middle: true,
    right: false
  };
}
