import { Component } from 'jinge';

import _tpl from './app.c.html';

export default class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
  }
  getClr() {
    return '#' + (Math.random() * 0xffffff | 0).toString(16);
  }
}
