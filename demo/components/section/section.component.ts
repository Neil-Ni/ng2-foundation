import { Component, Input } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'demo-section',
  directives: [ CORE_DIRECTIVES ],
  template: require('./section.html')
})

export class SectionComponent {
  @Input() public name:string;
  @Input() public link:string;
}
