import {
  Component
} from 'jinge';

import _tpl from './b.html';

export class B extends Component {
  static get template() {
    return _tpl;
  }
  static get style() {
    return `span {color: #F44336}`;
  }
}