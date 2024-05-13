import { component$, $, useStore } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {
  const state = useStore({count: 0});
  const a = $(1);
  const print = $((msg: string) => {
    console.log(msg);
    return msg + 1;
  });

  print('222');
  return (
    <div>{state.count}
      <button onClick$={$(async () => {
        const b = (await a)();
        console.log('a', a, b);
        await print('11');
        state.count = state.count + 1;
      })}></button>
    </div>
  )
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
