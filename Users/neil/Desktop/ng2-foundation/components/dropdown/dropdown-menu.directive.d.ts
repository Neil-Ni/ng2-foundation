import { ElementRef, OnInit, QueryList } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { DropdownMenuItemDirective } from './dropdown-menu-item.directive';
export declare class DropdownMenuDirective implements OnInit {
    dropdown: DropdownDirective;
    el: ElementRef;
    items: QueryList<DropdownMenuItemDirective>;
    constructor(dropdown: DropdownDirective, items: QueryList<DropdownMenuItemDirective>, el: ElementRef);
    ngOnInit(): void;
}
