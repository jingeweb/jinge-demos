import {
  Component,
  bootstrap,
  VM,
  vmWatch,
  setImmediate,
  UPDATE_IF_NEED
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
    
    /**
     * You don't need call vmUnwatch at BEFORE_DESTROY lifecycle,
     * becase all view-model listener will be auto clear when component is destroied.
     */
    vmWatch(this, 'todos.**', () => {
      /**
       * UPDATE_IF_NEED will ensure component has been rendered, then push update function
       * to setImmediate queue only if it's not already in queue.
       */
      this[UPDATE_IF_NEED](this.update);
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

  update() {
    this.allDone = this.todos.length > 0 && !this.todos.find(t => !t.done);
    saveTodos(this.todos);
  }
}

bootstrap(App, document.getElementById('root-app'));
