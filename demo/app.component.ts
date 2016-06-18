import { Component }                from '@angular/core';
import { AccordionDemoComponent }     from './components/accordion/accordion-demo';
import { AlertDemoComponent }         from './components/alert/alert-demo';
import { ButtonsDemoComponent }       from './components/buttons/buttons-demo';
import { DropdownMenuDemoComponent }  from './components/dropdown-menu/dropdown-menu-demo';
import { PaginationDemoComponent }    from './components/pagination/pagination-demo';
import { ProgressbarDemoComponent }   from './components/progressbar/progressbar-demo';
import { RatingDemoComponent }        from './components/rating/rating-demo';
import { TabsDemoComponent }          from './components/tabs/tabs-demo';
import { SectionComponent }           from './components/section/section.component';

@Component({
  selector: 'app',
  directives: [
    AccordionDemoComponent,
    AlertDemoComponent,
    ButtonsDemoComponent,
    DropdownMenuDemoComponent,
    PaginationDemoComponent,
    ProgressbarDemoComponent,
    RatingDemoComponent,
    TabsDemoComponent,
    SectionComponent
  ],
  template: require('./app.component.html')
})

export class AppComponent {}
