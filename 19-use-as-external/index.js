import {
  Component,
  bootstrap,
  AFTER_RENDER,
  GET_REF
} from 'jinge';
import {
  addClass
} from 'jinge/dom';

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
  [AFTER_RENDER]() {
    console.log(this[GET_REF]('title'))
    addClass(this[GET_REF]('title'), 'color-blue');
  }
}

bootstrap(App, document.getElementById('root-app'));
