import { type JNode, vm, type WithSlots } from 'jinge';

function B(props: { v: boolean } & WithSlots<{ a?: JNode }>) {
  // return <p>{props.v && props['slot:a']}</p> // 不通过
  // return props['slot:a'] ? <p>B: {props['slot:a']}</p> : <p>B22</p>; // 不通过
  // return <>props['slot:a'] ? <p>B: {props['slot:a']}</p> : <p>B22</p></>; // 不通过
  return <div>{props['slot:a'] ? <p>B: {props['slot:a']}</p> : <p>B22</p>}</div>; // 通过
}
export function App() {
  const state = vm({
    a: true,
    b: [1, 2, 3],
    c: 0,
  });
  return (
    <>
      {/* {state.a && <div>YES!233df</div>}
      {state.a && state.b.map((n) => <div key={n}>{n}</div>)} // 不通过
      */}
      <B v={state.a} />
      <p>
        <button
          on:click={() => {
            state.c++;
            state.a = !state.a;
            state.b.push((Math.random() * 1000) | 0);
          }}
        >
          TEST
        </button>
      </p>
    </>
  );
}
