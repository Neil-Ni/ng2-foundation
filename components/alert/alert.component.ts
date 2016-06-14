import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';

const ALERT_TEMPLATE = `
  <div class="callout" role="alert" [ngClass]="(type || '')" *ngIf="!closed">
    <ng-content></ng-content>
    <button *ngIf="closeable"
            type="button"
            class="close-button"
            aria-label="Close alert"
            type="button"
            (click)="onClose()">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  `;

@Component({
  selector: 'alert',
  directives: [ NgIf, NgClass ],
  template: ALERT_TEMPLATE
})

export class AlertComponent {
  @Input() public type:string = 'warning';
  @Input() public closeable:boolean;
  @Output() public close:EventEmitter<AlertComponent> = new EventEmitter(false);

  private closed:boolean;

  public onClose():void {
    this.closed = true;
    this.close.emit(this);
  }
}
