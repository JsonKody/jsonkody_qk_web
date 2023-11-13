import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.scss";

export default component$(() => {
  return (
    <main class={styles.jk}>
      <h1 title="JsonKody" class="">
        {" "}
        <a href="https://www.youtube.com/jsonkody"> {`{jk}`} </a>
      </h1>
      <div class={styles.wrap}>
        <a
          class="group flex h-24 w-12 cursor-pointer items-center justify-center"
          href="https://bekinka.cz"
          target="_blank"
          title="Bekinka"
        >
          <div class="trans inline-block h-2 w-2 rounded-full bg-gray-100 group-hover:scale-150 group-hover:bg-black"></div>
        </a>
        <a
          class="group flex h-24 w-12 cursor-pointer items-center justify-center"
          href="https://numeral-playground.jsonkody.cz"
          target="_blank"
          title="Numeral playground"
        >
          <div class="trans inline-block h-2 w-2 rounded-full bg-gray-100 group-hover:scale-150 group-hover:bg-black"></div>
        </a>
        <a
          class="group flex h-24 w-12 cursor-pointer items-center justify-center"
          href="https://github.com/JsonKody"
          target="_blank"
          title="Github"
        >
          <div class="trans inline-block h-2 w-2 rounded-full bg-gray-100 group-hover:scale-150 group-hover:bg-black"></div>
        </a>
        <a
          class="group flex h-24 w-12 cursor-pointer items-center justify-center"
          href="https://discord.gg/djVwV5FT"
          target="_blank"
          title="Discord"
        >
          <div class="trans inline-block h-2 w-2 rounded-full bg-gray-100 group-hover:scale-150 group-hover:bg-black"></div>
        </a>
        <a
          class="group flex h-24 w-12 cursor-pointer items-center justify-center"
          href="https://www.twitch.tv/jsonkody"
          target="_blank"
          title="Twitch"
        >
          <div class="trans inline-block h-2 w-2 rounded-full bg-gray-100 group-hover:scale-150 group-hover:bg-black"></div>
        </a>
        <a
          class="group flex h-24 w-12 cursor-pointer items-center justify-center"
          href="https://www.youtube.com/jsonkody"
          target="_blank"
          title="Youtube"
        >
          <div class="trans inline-block h-2 w-2 rounded-full bg-gray-100 group-hover:scale-150 group-hover:bg-black"></div>
        </a>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "JsonKody",
  meta: [
    {
      name: "description",
      content: "JsonKody web implemented in Qwik.",
    },
  ],
};
