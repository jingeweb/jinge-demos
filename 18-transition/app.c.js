import { Component } from 'jinge';

import _tpl from './app.c.html';

export default class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this.show = true;
    this.si = 0;
  }
  log(...args) {
    console.log(...args);
  }
}
