import { type Props, expose, onMount, onUnmount } from 'jinge';

export interface BoyRef {
  someApi(): void;
}
export function Boy(
  props: Props<{
    props: { name: string };
    expose: {
      someApi: () => void;
    };
  }>,
) {
  expose<typeof Boy>({
    someApi: () => {
      alert(`Hello, everyone. My name is ${props.name}`);
    },
  });
  onMount(() => {
    console.info('after mounted');
    return () => {
      console.info('before unmount 1');
    };
  });
  onUnmount(() => {
    console.info('before unmount 2');
  });
  return <span>Hello, Everyone! My name is {props.name}!</span>;
}
