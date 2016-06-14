import { BUTTON_DIRECTIVES } from './components/buttons';
import { AlertComponent } from './components/alert';

export * from './components/buttons';
export * from './components/alert';

export default {
  directives: [
    AlertComponent,
    BUTTON_DIRECTIVES
  ],
  providers: []
};
