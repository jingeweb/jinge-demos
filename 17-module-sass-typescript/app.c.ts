import {
  Component
} from 'jinge';

import _tpl from './app.c.html';

export class App extends Component {
  static template = _tpl;
  show: boolean;
  show2: boolean;
  r: string;

  constructor(attrs) {
    super(attrs);
    // this.r = (Math.random() * 100).toFixed(2);
    this.show = Math.random() > 0.5;
    this.show2 = Math.random() > 0.5;
    this.test();
  }
  test() {
    this.r = (Math.random() * 100).toFixed(2);
    console.log(this.r);
  }
}
