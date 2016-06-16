import {
  Component, OnInit, OnDestroy, Input, HostBinding, Inject
} from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { CollapseDirective } from '../collapse';
import { AccordionComponent } from './accordion.component';

/* tslint:disable:component-selector-name */
@Component({
  selector: 'accordion-group, accordion-panel',
  directives: [ CollapseDirective, NgClass, NgStyle ],
  template: `
    <li class="accordion-item" [ngClass]="panelClass" [class.is-active]="isOpen">
      <a href tabindex="0" class="accordion-toggle accordion-title" (click)="toggleOpen($event)">
        <span *ngIf="heading" [ngClass]="{'text-muted': isDisabled}">{{heading}}</span>
        <ng-content select="[accordion-heading]"></ng-content>
      </a>
      <div class="accordion-content" [ngStyle]="{display: isOpen ? 'block' : 'none'}" [collapse]="!isOpen">
        <ng-content></ng-content>
      </div>
    </li>
  `
})

export class AccordionPanelComponent implements OnInit, OnDestroy {
  @Input() public heading:string;
  @Input() public panelClass:string;
  @Input() public isDisabled:boolean;

  @HostBinding('class.panel-open')
  @Input()
  public get isOpen():boolean {
    return this._isOpen;
  }

  public set isOpen(value:boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOtherPanels(this);
    }
  }

  private _isOpen:boolean;
  private accordion:AccordionComponent;

  public constructor(@Inject(AccordionComponent) accordion:AccordionComponent) {
    this.accordion = accordion;
  }

  public ngOnInit():any {
    this.panelClass = this.panelClass || 'panel-default';
    this.accordion.addGroup(this);
  }

  public ngOnDestroy():any {
    this.accordion.removeGroup(this);
  }

  public toggleOpen(event:MouseEvent):any {
    event.preventDefault();
    if (!this.isDisabled) {
      this.isOpen = !this.isOpen;
    }
  }
}
