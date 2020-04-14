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
    this.n = (Math.random() * 10) | 0;
    setInterval(() => {
      this.n = (Math.random() * 10) | 0;
      console.log(this.n);
    }, 1000);
  }
  log(...args) {
    console.log(...args);
  }
}

bootstrap(App, document.getElementById('root-app'));
