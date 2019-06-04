import {
  Component,
  AFTER_RENDER,
  BEFORE_DESTROY,
  GET_CONTEXT,
  GET_REF
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
      this[GET_CONTEXT](UIROUTER_CONTEXT).go('list', {status: ''}, {location: 'replace'});
    } else {
      todoStoreService.updateStatus(args.status);
    }
  }
  [AFTER_RENDER]() {
    const $dom = this[GET_REF]('todo-list');
    console.log('todo list has been rendered with', $dom ? $dom.children.length : 0, '<li> elements');
  }
  [BEFORE_DESTROY]() {
    console.log('todo list will be destroy');
  }
}

