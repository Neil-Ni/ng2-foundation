import { Directive, ElementRef, Host, OnInit, HostBinding, Renderer} from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { positionService } from '../position';

@Directive({selector: '[dropdownTogglePane]'})
export class DropdownTogglePaneDirective implements OnInit {
  public dropdown:DropdownDirective;
  public el:ElementRef;
  public renderer: Renderer;
  private alignment: string = null;

  public constructor(@Host() dropdown:DropdownDirective, el:ElementRef, renderer: Renderer) {
    this.dropdown = dropdown;
    this.el = el;
    this.renderer = renderer;
  }

  ngOnInit() {
    this.dropdown.dropDownMenu = this;
    this.alignment = this.el.nativeElement.getAttribute('pane-align');
    this.renderer.setElementClass(this.el.nativeElement, `dropdown-pane`, true);

    let position = positionService.position(this.el.nativeElement.parentElement);
    this.renderer.setElementStyle(this.el.nativeElement, 'top', `${position.top} + ${position.height}px`);

    switch (this.alignment) {
      case 'center':
        this.renderer.setElementClass(this.el.nativeElement, `dropdown-pane-${this.alignment}`, true);
        this.renderer.setElementStyle(this.el.nativeElement, 'left', `${position.left + (position.width / 2)}px`);
        this.renderer.setElementStyle(this.el.nativeElement, 'transform', 'translateX(-50%)');
        break;
      case 'right':
        this.renderer.setElementClass(this.el.nativeElement, `dropdown-pane-${this.alignment}`, true);
        this.renderer.setElementStyle(this.el.nativeElement, 'left', `${position.left + (position.width)}px`);
        this.renderer.setElementStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
        break;
      case 'left':
        this.renderer.setElementStyle(this.el.nativeElement, 'left', `${position.left}px`);
        break;
    }
  }

  @HostBinding('attr.aria-hidden')
  @HostBinding('class.is-open')
  public get isOpen():boolean {
    return this.dropdown.isOpen;
  }
}
