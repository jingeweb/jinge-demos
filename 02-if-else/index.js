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
    setInterval(() => {
      this.n = (Math.random() * 10) | 0;
      console.log(this.n);
    }, 1000);
  }
}

bootstrap(App, document.getElementById('root-app'));
