<script setup>
  import { ref, defineEmits } from "vue";
  import AppNav from "./App-Nav.vue";
  import DarkTheme from "./DarkTheme.vue";
  import LightTheme from "./LightTheme.vue";

  const emits = defineEmits(["change-theme"]);
  const props = defineProps({
    theme: { type: String, required: true },
  });

  const routes = [
    { path: "/", title: "Home" },
    // { path: "/art", title: "Art" },
  ];

  const themeIndex = ref(0);
  switch (props.theme) {
    case "light":
      themeIndex.value = 0;
      break;
    case "dark":
      themeIndex.value = 1;
      break;
  }

  const setIndex = (index) => {
    themeIndex.value = index;
    emits("change-theme", themeIndex.value === 0 ? "light" : "dark");
  };
</script>

<template>
  <div class="App-actionbar">
    <div class="App-actionbar-items">
      <AppNav
        v-for="route of routes"
        :key="route.path"
        :path="route.path"
        :title="route.title"
      />
    </div>

    <div class="App-actionbar-theme">
      <div
        class="App-actionbar-theme-highlight"
        :style="{
          '--item-index': `${themeIndex}`,
        }"
      ></div>
      <button @click="() => setIndex(0)">
        <LightTheme :width="20" :height="20" />
      </button>
      <button @click="() => setIndex(1)">
        <DarkTheme :width="18" :height="18" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .App-actionbar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: sticky;
    top: 0;
    padding-right: 0.5rem;

    background-color: var(--background-color-opacity50);
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.05);

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      --blur: 1rem;
      -webkit-backdrop-filter: blur(var(--blur));
      backdrop-filter: blur(var(--blur));
    }

    .App-actionbar-items {
      gap: 1.2rem;
      padding: 1rem;

      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      overflow-y: auto;
    }
    .App-actionbar-theme {
      display: flex;
      flex-direction: row;
      align-items: center;

      background: rgba(0, 0, 0, 0.05);
      background: var(--text-color-opacity5);
      border: 1px solid var(--text-color-opacity5);
      border-radius: 0.5em;

      position: relative;
      padding: var(--container-padding);
      gap: var(--container-gap);
      font-size: 1rem;

      --container-gap: 0.2em;
      --container-padding: 0.2em;
      --item-width: 3em;
      --item-height: 3em;
      --item-index: 0;

      & > * {
        width: var(--item-width);
        height: var(--item-height);
        min-width: var(--item-width);
        min-height: var(--item-height);
        max-width: var(--item-width);
        max-height: var(--item-height);
        aspect-ratio: 1/1;
        display: grid;
        place-items: center;
      }
      & > button {
        font-size: inherit;
        background: none;
        border: none;
        cursor: pointer;
        z-index: 2;
      }
      .App-actionbar-theme-highlight {
        position: absolute;
        left: calc(
          var(--container-padding) +
            calc(var(--item-width) + var(--container-gap)) * var(--item-index)
        );

        transition: all 400ms ease;

        z-index: 1;
        background: var(--background-color-opacity70);
        pointer-events: none;
        border-radius: inherit;
      }
    }
  }
</style>
