import {
  Component,
  bootstrap
} from 'jinge';

import _tpl from './app.html';

class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.name = 'jinge';
    this.inc = 0;
  }
}

bootstrap(App, document.getElementById('root-app'));
