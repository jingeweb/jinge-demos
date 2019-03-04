import {
  Component
} from 'jinge';

import _tpl from './app.html';
import routes from '../routes';

export default class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this._routes = routes;
  }
}

