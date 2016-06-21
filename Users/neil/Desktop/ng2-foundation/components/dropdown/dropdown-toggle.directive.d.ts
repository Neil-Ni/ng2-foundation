import { ElementRef, OnInit } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
export declare class DropdownToggleDirective implements OnInit {
    hoverEnabled: boolean;
    disabled: boolean;
    addClass: boolean;
    dropdown: DropdownDirective;
    el: ElementRef;
    constructor(dropdown: DropdownDirective, el: ElementRef);
    ngOnInit(): void;
    isOpen: boolean;
    toggleDropdown(event: MouseEvent): boolean;
    mouseoverDropdown(event: MouseEvent): boolean;
    mouseleaveDropdown(event: MouseEvent): boolean;
}
