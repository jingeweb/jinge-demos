import { uid, vm, vmWatch } from 'jinge';

const STORAGE_KEY = 'jinge-todo-mvc-saved-todos';

export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

function load(): Todo[] {
  if (!window.localStorage) return [];
  const data = window.localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  try {
    const todos = JSON.parse(data);
    return Array.isArray(todos) ? todos : [];
  } catch {
    return [];
  }
}

const allTodos = load();
let currentFilter = 'all';

export const TodoStore = vm({
  status: 'all',
  all: allTodos,
  todos: [] as Todo[],
  remaining: 0,
});

vmWatch(
  TodoStore,
  'all',
  (v) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(v));
  },
  {
    deep: true,
  },
);
// function applyFilter() {

//   }

export function updateStatus(filter: string) {
  if (currentFilter === filter) return;
  currentFilter = filter || 'all';
  if (TodoStore.all.length === 0) return;
  if (currentFilter === 'all') {
    TodoStore.todos = TodoStore.all;
  } else {
    TodoStore.todos = TodoStore.all.filter((t) => t.done === (currentFilter === 'completed'));
  }
}

export function removeDone() {
  TodoStore.all = TodoStore.all.filter((t) => !t.done);
}

export function toggleAllDone() {
  if (TodoStore.all.length === 0) return;
  TodoStore.remaining = TodoStore.remaining > 0 ? 0 : TodoStore.all.length;
  TodoStore.all.forEach((t) => (t.done = TodoStore.remaining === 0));
}
// class TodoStore {
//   constructor() {
//     this.allTodos = this._load();
//     this.todos = this.allTodos.slice();
//     this.remaining = this._calcRemaining();
//     this._status = '';
//     /*
//      * this code is important. we must convert object to ViewModel,
//      *   as todo store will be linked to public property of Component.
//      */
//     return vm(this);
//   }
//   _findById(id) {
//     const idx = this._findIndexById(id);
//     return idx >= 0 ? this.allTodos[idx] : null;
//   }
//   _findIndexById(id) {
//     return this.allTodos.findIndex(t => t.id === id);
//   }
//   _calcRemaining() {
//     return this.allTodos.reduce((p, c) => p + (c.done ? 0 : 1), 0);
//   }
//   _load() {

//   }
//   _save() {
//     if (!window.localStorage) return;

//   }

//   updateStatus(status) {
//     if (this._status === status) return;
//     this._status = status;
//     this._filter();
//   }
//   toggleAllDone() {
//     if (this.allTodos.length === 0) return;
//     this.remaining = this.remaining > 0 ? 0 : this.allTodos.length;
//     this.allTodos.forEach(t => t.done = this.remaining === 0);
//     this._filter();
//     this._save();
//   }
//   toggleDone(todo) {
//     todo.done = !todo.done;
//     this.remaining += todo.done ? -1 : 1;
//     this._filter();
//     this._save();
//   }
//   removeDone() {
//     this.allTodos = this.allTodos.filter(t => !t.done);
//     this._filter();
//     this._save();
//   }
//   add(title) {
//     const todo = new Todo(title);
//     this.allTodos.push(todo);
//     this.remaining++;
//     this._filter();
//     this._save();
//   }
//   remove(id) {
//     let idx = this._findIndexById(id);
//     if (idx < 0) return;
//     const todo = this.allTodos.splice(idx, 1)[0];
//     if (!todo.done) {
//       this.remaining--;
//     }
//     this._filter();
//     this._save();
//   }
//   onTitleChanged(id) {
//     console.log('Message "title-changed" passed from TodoItem with argument:', id);
//     this._save();
//   }
//   onDoneChanged(id, isDone) {
//     console.log('Message "done-changed" passed from TodoItem with arguments:', id, ',', isDone);
//     this.remaining += isDone ? -1 : 1;
//     this._filter();
//     this._save();
//   }
// }

// // singleton
// export default new TodoStore();
