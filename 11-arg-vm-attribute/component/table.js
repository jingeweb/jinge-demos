import {
  Component
} from 'jinge';
import {
  isArray
} from 'jinge/src/util';

import _tpl from './table.html';

class TableColumn extends Component {

}

class TableCell extends Component {

}

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
    this._columnKey = `each.${attrs._columnKey || 'key'}`;
    this._rowKey = `each.${attrs._rowKey || 'key'}`;
  }
}