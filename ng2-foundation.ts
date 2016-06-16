import { ACCORDION_DIRECTIVES }   from './components/accordion';
import { AlertComponent }         from './components/alert';
import { BUTTON_DIRECTIVES }      from './components/buttons';
import { CollapseDirective }      from './components/collapse';
import { PAGINATION_DIRECTIVES }  from './components/pagination';
import { PROGRESSBAR_DIRECTIVES } from './components/progressbar';
import { RatingComponent }        from './components/rating';
import { TAB_DIRECTIVES }         from './components/tabs';

export * from './components/accordion';
export * from './components/alert';
export * from './components/buttons';
export * from './components/collapse';
export * from './components/pagination';
export * from './components/progressbar';
export * from './components/rating';
export * from './components/tabs';

export default {
  directives: [
    ACCORDION_DIRECTIVES,
    AlertComponent,
    BUTTON_DIRECTIVES,
    CollapseDirective,
    PAGINATION_DIRECTIVES,
    PROGRESSBAR_DIRECTIVES,
    RatingComponent,
    TAB_DIRECTIVES
  ],
  providers: []
};
