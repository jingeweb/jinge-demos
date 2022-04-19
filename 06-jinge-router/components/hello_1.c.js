import {
  Component, watch, unwatch
} from 'jinge';
import _tpl from './hello_1.c.html';
export default class HelloA extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);


    this._oqc = this._onQueryChange.bind(this);
    this._query = this.__getContext('router').query;
    watch(this._query, '*', this._oqc);
    this._onQueryChange();
  }
  __beforeDestroy() {
    unwatch(this._query, '*', this._oqc);
  }
  _onQueryChange() {
    this.qa = this._query.a;
  }
}