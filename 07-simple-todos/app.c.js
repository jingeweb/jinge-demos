import {
  Component,
  vm,
  watch
} from 'jinge';

import _tpl from './app.c.html';

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
  return vm({
    title,
    done
  });
}
export default class App extends Component {
  static template = _tpl;
  constructor(args) {
    super(args);
    this.todos = vm(loadTodos() || [createTodo('test')]);
    this.allDone = this.todos.length > 0 && !this.todos.find(t => !t.done);
    
    /**
     * You don't need call unwatch at __beforeDestroy lifecycle,
     * becase all view-model listener will be auto clear when component is destroied.
     */
    watch(this, 'todos.**', () => {
      /**
       * __updateIfNeed will ensure component has been rendered, then push update function
       * to setImmediate queue only if it's not already in queue.
       */
      this.__updateIfNeed();
    });
  }

  toggleAllDone() {
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

  __update() {
    this.allDone = this.todos.length > 0 && !this.todos.find(t => !t.done);
    saveTodos(this.todos);
  }
}
