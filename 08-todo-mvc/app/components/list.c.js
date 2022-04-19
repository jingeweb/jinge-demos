import {
  Component
} from 'jinge';

import _tpl from './list.c.html';
import todoStoreService from '../services/store';

export default class TodoList extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this.todoStore = todoStoreService;
    this.newTodo = '';
    if (!args.status || (args.status !== 'all' && args.status !== 'active' && args.status !== 'completed')) {
      this.__getContext('router').go({
        name: 'list', params: { status: 'all' }
      }, {
        replace: true
      });
    } else {
      todoStoreService.updateStatus(args.status);
    }
  }
  __afterRender() {
    const $dom = this.__getRef('todo-list');
    console.log('todo list has been rendered with', $dom ? $dom.children.length : 0, '<li> elements');
  }
  __beforeDestroy() {
    console.log('todo list will be destroy');
  }
}

