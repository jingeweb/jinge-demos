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
    // this.aa = 'app-aa';
    // this.bb = 'app-bb';
    this.store = vm({ count: 0 });
    this.__setContext('STORE', this.store);
    this.t = true;
    let i = 0;
    const int = setInterval(() => {
      i++;
      if (i >= 10) {
        clearInterval(int);
        this.t = false;
      } else {
        this.t = !this.t;
      }
    }, 100);
  }
  test() {
    console.log(this.store);
  }
}
