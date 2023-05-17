import { Component } from 'jinge';

import _tpl from './app.c.html';

export default class App extends Component {
  static get template() {
    return _tpl;
  }
  log(...args) {
    console.log(...args);
  }
  constructor(args) {
    super(args);
    this.disabled = false;
    this.fade = false;
    this.slide = true;
    this.show = true;
    this.si = 0;
    this.x = 0;
  }
  log(...args) {
    console.log(...args);
  }
  handleTransition(action, className, el) {
    console.log(action, className, el.className);
  }
  handleIfTransition(action, el) {
    console.log(action, el.className);
  }
  warnDisabled() {
    this.disabled = true;
    setTimeout(() => {
      this.disabled = false;
    }, 1500);
  }
  onMousemove(evt) {
    this.x = evt.clientX;
  }
}
