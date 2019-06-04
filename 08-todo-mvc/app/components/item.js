import {
  Component,
  AFTER_RENDER,
  BEFORE_DESTROY,
  GET_REF,
  NOTIFY
} from 'jinge';

import _tpl from './item.html';

export default class TodoItem extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.todo = attrs.todo;
    this.editing = false;
    this.editingTitle = '';
  }
  cancelEditing() {
		this.editing = false;
	}
	stopEditing() {
		this.editing = false;
    const editingTitle = this.editingTitle.trim();
    if (!editingTitle) {
      this.remove();
    } else {
      this.todo.title = editingTitle;
		  this[NOTIFY]('title-changed', this.todo.id);
    }
	}
	edit() {
    this.editing = true;
    this.editingTitle = this.todo.title;
  }
  focus(expect) {
    if (!expect) return;
    this[GET_REF]('edit').focus();
  }
  toggleDone() {
		this.todo.done = !this.todo.done;
		this[NOTIFY]('done-changed', this.todo.id, this.todo.done);
	}
	remove() {
    this[NOTIFY]('removed', this.todo.id);
  }
  [AFTER_RENDER]() {
    console.log(`todo ${this.todo.id} has been rendered:`, this[GET_REF]('todo'))
  }
  [BEFORE_DESTROY]() {
    console.log(`todo ${this.todo.id} will be destry.`);
  }
}

