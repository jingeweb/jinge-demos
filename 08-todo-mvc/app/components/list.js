import {
  Component
} from 'jinge';
import {
  UIROUTER_CONTEXT
} from 'jinge-ui-router';

import _tpl from './list.html';
import todoStoreService from '../services/store';

export default class TodoList extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this.todoStore = todoStoreService;
    this.newTodo = '';
    if (args.status && args.status !== 'active' && args.status !== 'completed') {
      this.getContext(UIROUTER_CONTEXT).go('list', {status: ''}, {location: 'replace'});
    } else {
      todoStoreService.updateStatus(args.status);
    }
  }
  afterRender() {
    const $dom = this.getChild('todo-list');
    console.log('todo list has been rendered with', $dom ? $dom.children.length : 0, '<li> elements');
  }
  beforeDestroy() {
    console.log('todo list will be destroy');
  }
}

