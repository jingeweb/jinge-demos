import {
  Component
} from 'jinge';

import _tpl from './index.html';
import _style from './style.scss';

export default class C extends Component {
  static get template() {
    return _tpl;
  }
  static get style() {
    return _style;
  }
  constructor(attrs) {
    super(attrs);
  }
}