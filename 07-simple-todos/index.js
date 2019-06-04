import {
  Component,
  bootstrap,
  BEFORE_DESTROY,
  VM,
  vmWatch,
  vmUnwatch,
  setImmediate
} from 'jinge';

import _tpl from './app.html';

const LS_KEY = 'JINGE_SAVED_SIMPLE_TODOS';

function loadTodos() {
  let data = localStorage.getItem(LS_KEY);
  if (!data) return null;
  try {
    data = JSON.parse(data);
    return Array.isArray(data) ? data : null;
  } catch {
    return null;
  }
}

function saveTodos(todos) {
  localStorage.setItem(LS_KEY, JSON.stringify(todos));
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
    
    vmWatch(this, 'todos.**', () => {
      if (this._upImm) return; // alreay waiting for update
      this._upImm = setImmediate(() => {
        this._upImm = null;
        this.update();
      });
    });
  }
  [BEFORE_DESTROY]() {
    vmUnwatch(this, 'todos.**');
  }
  toggleAllDone() {
    /**
     * 需要注意的是，这个地方的 forEach 循环，
     *   每更新一个 TodoItem 的 done 属性，都会
     *   触发一次 vmWatch('todos.**')。
     * 因此，vmWatch('todos.**') 的处理函数里
     *   推荐使用 setImmediate 来延后处理以提升性能。
     */
    this.todos.forEach(t => t.done = !this.allDone);
  }
  toggleDone(todo) {
    todo.done = !todo.done;
  }
  remove(todo) {
    const idx = this.todos.indexOf(todo);
    if (idx >= 0) this.todos.splice(idx, 1);
  }
  modify(todo) {
    const oldTitle = todo.title;
    let title = prompt("Please enter title", oldTitle);
    if (!title || !(title = title.trim())) {
      return;
    }
    todo.title = title;
  }
  add() {
    const title = prompt("Please enter title of new todo");
    if (!title || !title.trim()) {
      return;
    }
    this.todos.push(createTodo(title));
  }
  clear() {
    if (this.todos.length === 0) return;
    if (confirm('Sure to clear all todos?')) {
      this.todos.length = 0;
    }
  }
  update() {
    this.allDone = this.todos.length > 0 && !this.todos.find(t => !t.done);
    saveTodos(this.todos);
  }
}

bootstrap(App, document.getElementById('root-app'));
