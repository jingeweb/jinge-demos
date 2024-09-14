import { vm, watch } from 'jinge';
import { useParams } from 'jinge-router';
import { type Todo, TodoStore,   toggleAllDone } from '../services/store';
import { Footer } from './Footer';
import { TodoItem } from './Item';

export function TodoList() {
  const state = vm({
    newTodo: '',
    todos: [] as Todo[],
    remaining: TodoStore.all.reduce((p, c) => p + (c.done ? 0 : 1), 0),
  });
  const params = useParams<{ status?: string }>();
  watch(params, 'status', (v) => {
    state.todos = !v || v === 'all' ? TodoStore.all : TodoStore.all.filter(todo => {
      return todo.done !== (v === 'active')
    });
  }, {
    immediate: true
  })
  
  return (
    <section className='todoapp'>
      <header className='header'>
        <h1>Todos</h1>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          value={state.newTodo}
          onChange={(evt) => (state.newTodo = evt.target.value)}
          autoFocus
          onKeyUp={(evt) => {
            if (evt.key === 'Enter') {
              (state.newTodo.trim());
              state.newTodo = '';
            }
          }}
        />
      </header>
      {TodoStore.todos.length > 0 && (
        <section className='main'>
           <input
              id='toggle-all'
              className='toggle-all'
              type='checkbox'
              checked={TodoStore.remaining === 0 && TodoStore.all.length > 0}
              onClick={() => {
                
              }}
            />
          <label for="toggle-all">
            Mark all as complete
          </label>
          <ul className='todo-list' ref:todo-list>
            {TodoStore.todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
            {/* <for e:loop="todoStore.todos" vm:each="todo" key="each.id">
          <TodoItem
            e:todo="todo"
            on:removed="todoStore.remove"
            on:title-changed="todoStore.onTitleChanged"
            on:done-changed="todoStore.onDoneChanged"
          />
        </for> */}
          </ul>
        </section>
      )}
      <Footer />
    </section>
  );
}
