import { Injectable } from '@angular/core';

@Injectable()
export class TooltipOptions {
  public placement:string;
  public popupClass:string;
  public animation:boolean;
  public isOpen:boolean;

  public constructor(options:Object) {
    Object.assign(this, options);
  }
}