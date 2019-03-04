import {
  Component
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
		  this.notify('title-changed', this.todo.id);
    }
	}
	edit() {
    this.editing = true;
    this.editingTitle = this.todo.title;
  }
  focus(expect) {
    if (!expect) return;
    this.getChild('edit').focus();
  }
  toggleDone() {
		this.todo.done = !this.todo.done;
		this.notify('done-changed', this.todo.id, this.todo.done);
	}
	remove() {
    this.notify('removed', this.todo.id);
  }
  afterRender() {
    console.log(`todo ${this.todo.id} has been rendered:`, this.getChild('todo'))
  }
  beforeDestroy() {
    console.log(`todo ${this.todo.id} will be destry.`);
  }
}

