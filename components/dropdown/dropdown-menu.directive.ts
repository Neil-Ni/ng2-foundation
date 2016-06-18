import { Directive, ElementRef, Host, OnInit, QueryList, Query } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { DropdownMenuItemDirective } from './dropdown-menu-item.directive';

@Directive({selector: '[dropdownMenu]'})
export class DropdownMenuDirective implements OnInit {
  public dropdown:DropdownDirective;
  public el:ElementRef;
  items: QueryList<DropdownMenuItemDirective>;

  public constructor(@Host() dropdown:DropdownDirective,
                     @Query(DropdownMenuItemDirective) items: QueryList<DropdownMenuItemDirective>,
                     el:ElementRef) {
    this.dropdown = dropdown;
    this.el = el;
    this.items = items;
  }

  ngOnInit() {
    this.dropdown.dropDownMenu = this;
  }
}
