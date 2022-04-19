import {
  Component,
  vm,
  isArray
} from 'jinge';
import _tpl from './tree.c.html';
export default class Tree extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.data = attrs.data;
  }
  get data() {
    return this._data;
  }
  set data(v) {
    this._data = isArray(v) ? v : vm([v]);
  }
}