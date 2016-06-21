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
  }

  ngAfterViewChecked() {
    switch (this.alignment) {
      case 'center':
      case 'right':
        this.renderer.setElementClass(this.el.nativeElement, `dropdown-pane-${this.alignment}`, true);
        break;
    }

    let button:HTMLElement = this.el.nativeElement.parentElement.children[0];

    if (button) {
      let elePosition = positionService.position(this.el.nativeElement);
      let buttonPosition = positionService.position(button);
      this.renderer.setElementStyle(this.el.nativeElement, 'top', `${buttonPosition.top + buttonPosition.height + 2}px`);

      switch (this.alignment) {
        case 'center':
          if (elePosition.width < buttonPosition.width ) {
            this.renderer.setElementStyle(this.el.nativeElement, 'left', `${buttonPosition.left + buttonPosition.width / 2 }px`);
            this.renderer.setElementStyle(this.el.nativeElement, 'transform', 'translateX(-50%)');
          }
          break;
        case 'right':
          this.renderer.setElementStyle(this.el.nativeElement, 'left', `${buttonPosition.left + buttonPosition.width}px`);
          this.renderer.setElementStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
          break;
      }
    }
  }

  @HostBinding('attr.aria-hidden')
  @HostBinding('class.is-open')
  public get isOpen():boolean {
    return this.dropdown.isOpen;
  }
}
