import {
  Component,
  vm
} from 'jinge';

import _tpl from './app.c.html';

export default class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this.aa = 'app-aa';
    this.bb = 'app-bb';
    this.store = vm({ count: 0 });
    this.__setContext('STORE', this.store);
  }
}
