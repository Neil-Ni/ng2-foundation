import { ElementRef, OnInit, Renderer } from '@angular/core';
export declare class DropdownMenuItemDirective implements OnInit {
    el: ElementRef;
    renderer: Renderer;
    ulChild: any;
    constructor(el: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    mouseEnter(): void;
    mouseLeave(): void;
    click(): void;
}
