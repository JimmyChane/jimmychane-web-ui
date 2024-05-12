<script setup lang="ts">
  import { computed, defineAsyncComponent, watch } from 'vue';
  import { DarkTheme, LightTheme } from '@/data/Theme';
  import { useThemeStore } from '@/stores/theme/theme.store';
  import { useNavigationDrawerStore } from '@/stores/navigation-drawer/navigation-drawer.store';
  import { useNavigationStore } from '@/stores/navigation/navigation.store';
  import { useWindowStore } from '@/stores/window/window.store';
  import { useRoute } from 'vue-router';

  const HamburgerIcon = defineAsyncComponent(() => import('@/components/icon/Hamburger.icon.vue'));
  const AppNav = defineAsyncComponent(() => import('./App-Nav.vue'));

  const route = useRoute();
  const navigationStore = useNavigationStore();
  const navigationDrawerStore = useNavigationDrawerStore();
  const themeStore = useThemeStore();
  const windowStore = useWindowStore();

  const indexTheme = computed(() => {
    switch (themeStore.theme.key) {
      case LightTheme.key:
        return 0;
      case DarkTheme.key:
        return 1;
      default:
        return -1;
    }
  });
  const navigation = computed(() => {
    return navigationStore.navigations.find((navigationRoute) => navigationRoute.key === route.name);
  });

  function onSizeChange() {
    if (windowStore.isLargerThanMobile) {
      navigationDrawerStore.close();
    }
  }

  watch(() => windowStore.isLargerThanMobile, onSizeChange);
</script>

<template>
  <div class="App-actionbar">
    <div class="App-actionbar-content">
      <div class="App-actionbar-title" v-if="!windowStore.isLargerThanMobile">
        <button class="App-actionbar-hamburger" @click="() => navigationDrawerStore.toggle()">
          <HamburgerIcon :width="24" :height="24" />
        </button>

        <span v-if="navigation">{{ navigation.title }}</span>
      </div>

      <div v-if="windowStore.isLargerThanMobile" class="App-actionbar-items">
        <AppNav v-for="route of navigationStore.navigations" :key="route.key" :item="route" />
      </div>

      <div class="App-actionbar-theme">
        <div
          class="App-actionbar-theme-highlight"
          :style="{ '--item-index': `${indexTheme}` }"
        ></div>
        <button @click="() => themeStore.toggleThemes()" aria-label="Light Theme">
          <component :is="LightTheme.icon" :width="20" :height="20" />
        </button>
        <button @click="() => themeStore.toggleThemes()" aria-label="Dark Theme">
          <component :is="DarkTheme.icon" :width="18" :height="18" />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .App-actionbar {
    width: 100%;
    height: var(--actionbar-height);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: sticky;
    top: 0;

    background-color: var(--background-color-opacity50);
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.05);

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      --blur: 1rem;
      -webkit-backdrop-filter: blur(var(--blur));
      backdrop-filter: blur(var(--blur));
    }

    .App-actionbar-content {
      width: 100%;
      max-width: var(--content-max-width);
      gap: 1rem;
      padding: 1rem;
      transition: all 200ms ease;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      @media (min-width: 700px) {
        padding: 2rem;
      }
      @media (min-width: 1200px) {
        padding: 4rem;
      }

      .App-actionbar-title {
        gap: 1rem;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        .App-actionbar-hamburger {
          aspect-ratio: 1/1;

          display: grid;
          place-items: center;

          --size: 2.5rem;
          width: var(--size);
          height: var(--size);

          border-radius: 50%;
          border: none;
          background: none;

          & > * {
            --color: var(--color-active);
          }
        }

        & > span {
          font-size: 1.1rem;
          font-weight: 600;
          line-height: 1rem;
        }
      }
    }

    .App-actionbar-items {
      gap: 0.5rem;

      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
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
          var(--container-padding) + calc(var(--item-width) + var(--container-gap)) *
            var(--item-index)
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
