import {
  Component
} from 'jinge';

import _tpl from './c.html';

export class C extends Component {
  static get template() {
    return _tpl;
  }
  static get style() {
    return `span {color: #FFEB3B}`;
  }
}