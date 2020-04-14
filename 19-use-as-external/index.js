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
    this.n = 0;
  }
  test(evt) {
    console.log(evt);
    this.n++;
  }
  __afterRender() {
    console.log(this.__getRef('title'))
    this.__getRef('title').classList.add('color-blue');
  }
}

bootstrap(App, document.getElementById('root-app'));
