import { Component, OnInit, OnDestroy, HostBinding, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgTranscludeDirective } from '../common';
import { TabDirective } from './tab.directive';
// todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
@Component({
  selector: 'tabset',
  directives: [NgClass, NgTranscludeDirective],
  template: `
    <div class="tabbable">
      <ul class="tabs" [ngClass]="classMap">
        <li *ngFor="let tabz of tabs"
            class="tabs-title"
            [class.is-active]="tabz.active">
          <a (click)="tabz.active = true"
             [attr.aria-selected]="active">
            <span [ngTransclude]="tabz.headingRef">{{tabz.heading}}</span>
            <span *ngIf="tabz.removable">
              <span (click)="$event.preventDefault(); removeTab(tabz);"
                    class="fa fa-times"></span>
            </span>
          </a>
        </li>
      </ul>
      <div class="tabs-content" [ngClass]="classMap">
        <ng-content></ng-content>
      </div>
    </div>
  `
})

export class TabsetComponent implements OnInit, OnDestroy {
  @Input()
  public get vertical():boolean { return this._vertical;};

  @Input()
  public get justified():boolean { return this._justified;};

  @Input()
  public get type():string {return this._type;};

  @HostBinding('class.tab-container') protected clazz:boolean = true;

  public set vertical(value:boolean) {
    this._vertical = value;
    this.setClassMap();
  }

  public set justified(value:boolean) {
    this._justified = value;
    this.setClassMap();
  }

  public set type(value:string) {
    this._type = value;
    this.setClassMap();
  }

  public tabs:Array<TabDirective> = [];

  private isDestroyed:boolean;
  private _vertical:boolean;
  private _justified:boolean;
  private _type:string;
  private classMap:any = {};

  public ngOnInit():void {
    this.type = this.type !== 'undefined' ? this.type : 'tabs';
  }

  public ngOnDestroy():void {
    this.isDestroyed = true;
  }

  public addTab(tab:TabDirective):void {
    this.tabs.push(tab);
    tab.active = this.tabs.length === 1 && tab.active !== false;
  }

  public removeTab(tab:TabDirective):void {
    let index = this.tabs.indexOf(tab);
    if (index === -1 || this.isDestroyed) {
      return;
    }
    // Select a new tab if the tab to be removed is selected and not destroyed
    if (tab.active && this.hasAvailableTabs(index)) {
      let newActiveIndex = this.getClosestTabIndex(index);
      this.tabs[newActiveIndex].active = true;
    }

    tab.removed.emit(tab);
    this.tabs.splice(index, 1);
  }

  private getClosestTabIndex(index:number):number {
    let tabsLength = this.tabs.length;
    if (!tabsLength) {
      return -1;
    }

    for (let step = 1; step <= tabsLength; step += 1) {
      let prevIndex = index - step;
      let nextIndex = index + step;
      if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
        return prevIndex;
      }
      if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
        return nextIndex;
      }
    }
    return -1;
  }

  private hasAvailableTabs(index:number):boolean {
    let tabsLength = this.tabs.length;
    if (!tabsLength) {
      return false;
    }

    for (let i = 0; i < tabsLength; i += 1) {
      if (!this.tabs[i].disabled && i !== index) {
        return true;
      }
    }
    return false;
  }

  private setClassMap():void {
    this.classMap = {
      'vertical': this.vertical
    };
  }
}
