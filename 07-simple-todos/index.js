import {
  Component,
  bootstrap,
  VM
} from 'jinge';

import _tpl from './app.html';

function loadTodos() {
  let data = localStorage.getItem('jinge-simple-todos');
  if (!data) return null;
  try {
    data = JSON.parse(data);
    return Array.isArray(data) ? data : null;
  } catch {
    return null;
  }
}

function saveTodos(todos) {
  localStorage.setItem('jinge-simple-todos', JSON.stringify(todos));
}

function createTodo(title, done = false) {
  return VM({
    title,
    done
  });
}
class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this.todos = VM(loadTodos() || [createTodo('test')]);
    this.allDone = this.todos.length > 0 && !this.todos.find(t => !t.done);
  }
  toggleAllDone() {
    this.todos.forEach(t => t.done = !this.allDone);
    this.update();
  }
  toggleDone(todo) {
    todo.done = !todo.done;
    this.update();
  }
  remove(todo) {
    const idx = this.todos.indexOf(todo);
    if (idx >= 0) this.todos.splice(idx, 1);
    this.update();
  }
  modify(todo) {
    const oldTitle = todo.title;
    let title = prompt("Please enter title", oldTitle);
    if (!title || !(title = title.trim())) {
      return;
    }
    todo.title = title;
    this.update();
  }
  add() {
    const title = prompt("Please enter title of new todo");
    if (!title || !title.trim()) {
      return;
    }
    this.todos.push(createTodo(title));
    this.update();
  }
  clear() {
    if (this.todos.length === 0) return;
    if (confirm('Sure to clear all todos?')) {
      this.todos.length = 0;
      this.update();
    }
  }
  update() {
    this.allDone = this.todos.length > 0 && !this.todos.find(t => !t.done);
    saveTodos(this.todos);
  }
}

bootstrap(App, document.getElementById('root-app'));
