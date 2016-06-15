import { AlertComponent }         from './components/alert';
import { BUTTON_DIRECTIVES }      from './components/buttons';
import { PAGINATION_DIRECTIVES }  from './components/pagination';
import { PROGRESSBAR_DIRECTIVES } from './components/progressbar';

export * from './components/alert';
export * from './components/buttons';
export * from './components/pagination';
export * from './components/progressbar';

export default {
  directives: [
    AlertComponent,
    BUTTON_DIRECTIVES,
    PAGINATION_DIRECTIVES,
    PROGRESSBAR_DIRECTIVES
  ],
  providers: []
};
