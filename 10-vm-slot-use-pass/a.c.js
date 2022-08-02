import { Component } from 'jinge';

import _tpl from './a.c.html';

export class A extends Component {
  static template = _tpl;

  constructor(args) {
    super(args);
    this.store = this.__getContext('STORE');
  }
}
