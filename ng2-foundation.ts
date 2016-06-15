import { AlertComponent }        from './components/alert';
import { BUTTON_DIRECTIVES }     from './components/buttons';
import { PAGINATION_DIRECTIVES } from './components/pagination';

export * from './components/alert';
export * from './components/buttons';
export * from './components/pagination';

export default {
  directives: [
    AlertComponent,
    BUTTON_DIRECTIVES,
    PAGINATION_DIRECTIVES
  ],
  providers: []
};
