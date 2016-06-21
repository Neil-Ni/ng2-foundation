import { ElementRef, OnInit, Renderer } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
export declare class DropdownTogglePaneDirective implements OnInit {
    dropdown: DropdownDirective;
    el: ElementRef;
    renderer: Renderer;
    private alignment;
    constructor(dropdown: DropdownDirective, el: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    isOpen: boolean;
}
