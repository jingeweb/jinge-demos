import {
  Component,
  _t,
  i18n
} from 'jinge';

import _tpl from './app2.c.html';


export default class App extends Component {
  static get template() {
    return _tpl;
  }
  test() {
    i18n.switch('en');
  }
}
