import {
  Component,
  bootstrap
} from 'jinge';

import _tpl from './app.html';

class App extends Component {
  static get template() {
    return _tpl;
  }
  log(...args) {
    console.log(...args);
  }
  constructor(args) {
    super(args);
    this.fade = false;
    this.slide = true;
    this.show = true;
    this.si = 0;
  }
  handleTransition(action, className, el) {
    console.log(action, className, el.className);
  }
  handleIfTransition(action, el) {
    console.log(action, el.className);
  }
}

bootstrap(App, document.getElementById('root-app'));
