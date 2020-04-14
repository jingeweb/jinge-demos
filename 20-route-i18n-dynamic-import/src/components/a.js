import {
  Component
} from 'jinge';

import _tpl from './a.html';

export class A extends Component {
  static get template() {
    return _tpl;
  }
  static get style() {
    return `span {color: #2196F3;}`;
  }
}