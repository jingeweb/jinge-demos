import {
  Component
} from 'jinge';
import {
  isArray
} from 'jinge/src/util';

import _tpl from './table.html';

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
  }
}