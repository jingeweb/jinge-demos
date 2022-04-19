import {
  Component,
  isArray
} from 'jinge';

import _tpl from './table.c.html';

export default class Table extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    if (!isArray(attrs.data) || !isArray(attrs.columns)) {
      throw new Error('bad attribute value.');
    }
    super(attrs);
    this.data = attrs.data;
    this.columns = attrs.columns;
    this._columnKey = `each.${attrs.columnKey || 'key'}`;
    this._rowKey = `each.${attrs.rowKey || 'key'}`;
  }
}