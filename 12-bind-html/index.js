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
    this.content = '<h4>Hello, World!</h4>';
  }
}

bootstrap(App, document.getElementById('root-app'));
