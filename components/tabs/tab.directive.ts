import {
  Directive, OnDestroy, Input, Output, HostBinding, TemplateRef, EventEmitter
} from '@angular/core';
import {TabsetComponent} from './tabset.component';

/* tslint:disable */
@Directive({selector: 'tab, [tab]'})
/* tslint:enable */
export class TabDirective implements OnDestroy {
  @Input() public heading:string;
  @Input() public disabled:boolean;
  @Input() public removable:boolean;

  /** tab active state toggle */
  @HostBinding('class.is-active')
  @Input()
  public get active():boolean {
    return this._active;
  }

  @Output() public select:EventEmitter<TabDirective> = new EventEmitter(false);
  @Output() public deselect:EventEmitter<TabDirective> = new EventEmitter(false);
  @Output() public removed:EventEmitter<TabDirective> = new EventEmitter(false);

  public set active(active:boolean) {
    if (this.disabled && active || !active) {
      if (!active) {
        this._active = active;
      }

      this.deselect.emit(this);
      return;
    }

    this._active = active;
    this.select.emit(this);
    this.tabset.tabs.forEach((tab:TabDirective) => {
      if (tab !== this) {
        tab.active = false;
      }
    });
  }

  @HostBinding('class.tabs-panel') public addClass:boolean = true;

  public headingRef:TemplateRef<any>;
  public tabset:TabsetComponent;
  private _active:boolean;

  public constructor(tabset:TabsetComponent) {
    this.tabset = tabset;
    this.tabset.addTab(this);
  }

  public ngOnInit():void {this.removable = !!this.removable;}

  public ngOnDestroy():void {
    this.tabset.removeTab(this);
  }
}
