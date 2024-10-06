import { onMount, ref, vm } from 'jinge';
import { Boy, type BoyRef } from './boy';

export function App() {
  const state = vm({ name: 'Bob', show: true, count: 0 });
  const boy = ref<BoyRef>();

  onMount(() => {
    boy.value?.someApi();
  });
  const toggleShow = () => {
    state.count++;
    state.show = !state.show;
  };

  return (
    <>
      <h2>Lifecycle demo</h2>
      <p>
        Each component have two lifecycle hooks, onMount and onUnmount. Open Dev-Tools to see log.
      </p>
      <p>{state.show && <Boy ref={boy} name={`${state.name}_${state.count}`} />}</p>
      <p>
        <button onClick={() => toggleShow()}>{state.show ? 'Hide' : 'Show'} Boy</button>
        {state.show && (
          <button
            onClick={() => {
              boy.value?.someApi();
            }}
          >
            Call Api
          </button>
        )}
      </p>
    </>
  );
}
