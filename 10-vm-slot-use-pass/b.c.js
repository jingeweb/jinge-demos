import { Component, unwatch, watch } from 'jinge';

import _tpl from './b.c.html';

export class B extends Component {
  static template = _tpl;

  constructor(args) {
    super(args);
    const store = this.__getContext('STORE');
    this.k = store.count;
    this._h = () => {
      this.k = store.count;
    };
    watch(store, 'count', this._h);
  }
  __beforeDestroy() {
    unwatch(this.__getContext('STORE'), 'count', this._h);
  }
}