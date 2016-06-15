import { Component, OnInit, ElementRef, Renderer, Self } from '@angular/core';
import { NgModel, NgClass } from '@angular/common';
import { PaginationComponent } from './pagination.component';

//TODO: Bug: pagerConfig is ignored
const pagerConfig = {
  itemsPerPage: 10,
  previousText: '« Previous',
  nextText: 'Next »',
  align: true
};

const PAGER_TEMPLATE = `
    <ul class="pagination">
      <li class="arrow pagination-previous"
          [class.unavailable]="noPrevious()"
          [class.left]="!noPrevious()"
          [ngClass]="{'pull-right': align}">
        <a href (click)="selectPage(page - 1, $event)">{{getText('previous')}}</a>
      </li>
      <li class="arrow pagination-next"
          [class.unavailable]="noNext()"
          [class.right]="!noNext()"
          [ngClass]="{'pull-right': align}">
        <a href (click)="selectPage(page + 1, $event)">{{getText('next')}}</a>
      </li>
  </ul>
`;

/* tslint:disable */
@Component({
  selector: 'pager[ngModel]',
  template: PAGER_TEMPLATE,
  directives: [NgClass],
  inputs: [
    'align',
    'totalItems', 'itemsPerPage',
    'previousText', 'nextText',
  ]
})
/* tslint:enable */

export class PagerComponent extends PaginationComponent implements OnInit {
  public config:any = pagerConfig;

  public constructor(@Self() cd:NgModel, renderer:Renderer, elementRef:ElementRef) {
    super(cd, renderer, elementRef);
  }
}
