import { Directive, ElementRef, Host, OnInit, Renderer, HostListener } from '@angular/core';

@Directive({ selector: 'li' })
export class DropdownMenuItemDirective implements OnInit {
  public el:ElementRef;
  public renderer:Renderer;
  public ulChild: any;

  public constructor(el:ElementRef,
                     renderer:Renderer) {
    this.el = el;
    this.renderer = renderer;
  }

  ngOnInit() {
    let children = this.el.nativeElement.children;

    for (let child of children) {
      if (child.nodeName === 'UL' && child.classList.contains('menu')) {
        this.ulChild = child;
      }
    }

    let topLevel = this.el.nativeElement.parentElement.hasAttribute('dropdown-menu');
    if (!topLevel) {
      this.renderer.setElementClass(this.el.nativeElement, 'is-submenu-item', true);
    }

    if (this.ulChild) {
      this.renderer.setElementClass(this.ulChild, 'is-dropdown-submenu', true);
      this.renderer.setElementClass(this.ulChild, 'menu', true);
      this.renderer.setElementClass(this.ulChild, 'submenu', true);
      this.renderer.setElementClass(this.ulChild, 'vertical', true);

      this.renderer.setElementClass(this.el.nativeElement, 'is-dropdown-submenu-parent', true);
      this.renderer.setElementClass(this.el.nativeElement, 'opens-right', true);

      if (topLevel) {
        this.renderer.setElementClass(this.ulChild, 'first-sub', true);
      }
    }
  }

  @HostListener('mouseenter')
  public mouseEnter() {
    if (this.ulChild) {
      let siblings = this.el.nativeElement.parentElement.children;
      for (let sibling of siblings) {
        for (let child of sibling.children) {
          this.renderer.setElementClass(child, 'js-dropdown-active', false);
        }
      }
      this.renderer.setElementClass(this.ulChild, 'js-dropdown-active', true);
      this.renderer.setElementClass(this.el.nativeElement, 'is-active', true);
    }
  }

  @HostListener('mouseleave')
  public mouseLeave() {
    if (this.ulChild) {
      this.renderer.setElementClass(this.ulChild, 'js-dropdown-active', false);
      this.renderer.setElementClass(this.el.nativeElement, 'is-active', false);
    }
  }

  @HostListener('click')
  public click() {
    if (this.ulChild) {
      this.renderer.setElementClass(this.ulChild, 'js-dropdown-active', true);
      this.renderer.setElementClass(this.el.nativeElement, 'is-active', true);
    }
  }
}
