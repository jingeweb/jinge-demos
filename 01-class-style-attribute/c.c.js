import { Component } from 'jinge';

import _tpl from './c.c.html';

export class C extends Component {
  static template = _tpl;
  constructor(attrs) {
    super(attrs);
    this.class = `${attrs.class} italic`;
  }
}
