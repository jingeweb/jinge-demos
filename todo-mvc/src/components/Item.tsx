import { type Props, cx, vm } from 'jinge';
import type { Todo } from '../services/store';

export function TodoItem(
  props: Props<{
    todo: Todo;
  }>,
) {
  const state = vm({ editing: false, editingTitle: '' });
  const stopEdit = () => {
    state.editing = false;
    const editingTitle = state.editingTitle.trim();
    if (!editingTitle) {
      // this.remove();
    } else {
      // this.todo.title = editingTitle;
      // this.__notify('title-changed', this.todo.id);
    }
  };
  return (
    <li className={cx(props.todo.done && 'completed', state.editing && 'editing')}>
      <div className='view'>
        <input
          className='toggle'
          id={`todo-toggle-${props.todo.id}`}
          type='checkbox'
          onClick={() => {
            //
          }}
          checked={props.todo.done}
        />
        <label
          for={`todo-toggle-${props.todo.id}`}
          onDoubleClick={() => {
            state.editing = true;
          }}
        >
          {props.todo.title}
        </label>
        <button
          className='destroy'
          onClick={() => {
            //
          }}
        ></button>
      </div>
      {state.editing && (
        <input
          className='edit'
          value='editingTitle'
          onChange={(evt) => (state.editingTitle = evt.target.value)}
          onBlur={() => {
            stopEdit();
          }}
          onKeyUp={(evt) => {
            if (evt.key === 'Enter') {
              stopEdit();
            } else if (evt.key === 'Esc') {
              state.editing = false;
              state.editingTitle = '';
            }
          }}
        />
      )}
    </li>
  );
}
