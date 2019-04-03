import {
  Component,
  bootstrap
} from 'jinge';

import _tpl from './app.html';

class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this.show = Math.random() > 0.5;
    this.show2 = Math.random() > 0.5;
  }
}

bootstrap(App, document.getElementById('root-app'));
