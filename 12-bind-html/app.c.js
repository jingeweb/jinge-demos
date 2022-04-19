import {
  Component
} from 'jinge';

import _tpl from './app.c.html';

export default class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this.content = '<h4>Hello, World!</h4>';
  }
}
