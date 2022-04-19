import {
  Component
} from 'jinge';

import _tpl from './index.html';

export default class A extends Component {
  static template = _tpl;
  n: string;

  constructor(attrs) {
    super(attrs);
    this.n = attrs.n;
    console.log(this.n);
  }
}