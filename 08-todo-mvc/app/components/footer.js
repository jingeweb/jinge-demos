import {
  Component
} from 'jinge';

import _tpl from './footer.html';

import todoStoreService from '../services/store';

export default class TodoFooter extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.todoStore = todoStoreService;
  }
}

