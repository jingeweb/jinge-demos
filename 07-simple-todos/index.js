import {
  Component,
  bootstrap,
  VM,
  vmWatch,
  vmUnwatch
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
    this._updateHandler = this.update.bind(this);
    /**
     * 使用 vmWatch 在某些场景下可以使得代码更简洁。
     * 但通常情况下，并不推荐使用 vmWatch 的形式，因为当模块化和逻辑性更加复杂
     * 时，使用 watch 的模式不利于代码的可理解性。
     * 
     * 此处只是演示 vmWatch 函数的用法，并不推荐这样使用。
     */
    vmWatch(this, 'todos.**', this._updateHandler);
  }
  beforeDestroy() {
    vmUnwatch(this, 'todos.**', this._updateHandler);
  }
  toggleAllDone() {
    this.todos.forEach(t => t.done = !this.allDone);
    // this.update(); // 如果不使用 vmWatch 来统一监控，则需要在每一处手动触发 this.update()
  }
  toggleDone(todo) {
    todo.done = !todo.done;
    // this.update(); // 如果不使用 vmWatch 来统一监控，则需要在每一处手动触发 this.update()
  }
  remove(todo) {
    const idx = this.todos.indexOf(todo);
    if (idx >= 0) this.todos.splice(idx, 1);
    // this.update(); // 如果不使用 vmWatch 来统一监控，则需要在每一处手动触发 this.update()
  }
  modify(todo) {
    const oldTitle = todo.title;
    let title = prompt("Please enter title", oldTitle);
    if (!title || !(title = title.trim())) {
      return;
    }
    todo.title = title;
    // this.update(); // 如果不使用 vmWatch 来统一监控，则需要在每一处手动触发 this.update()
  }
  add() {
    const title = prompt("Please enter title of new todo");
    if (!title || !title.trim()) {
      return;
    }
    this.todos.push(createTodo(title));
    // this.update(); // 如果不使用 vmWatch 来统一监控，则需要在每一处手动触发 this.update()
  }
  clear() {
    if (this.todos.length === 0) return;
    if (confirm('Sure to clear all todos?')) {
      this.todos.length = 0;
      // this.update(); // 如果不使用 vmWatch 来统一监控，则需要在每一处手动触发 this.update()
    }
  }
  update() {
    console.log('updated');
    this.allDone = this.todos.length > 0 && !this.todos.find(t => !t.done);
    saveTodos(this.todos);
  }
}

bootstrap(App, document.getElementById('root-app'));
