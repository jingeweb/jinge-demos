import {
  Component,
  bootstrap
} from 'jinge';

import _tpl from './app.html';

class App extends Component {
  static get template() {
    return _tpl;
  }
}

bootstrap(App, document.getElementById('root-app'));
