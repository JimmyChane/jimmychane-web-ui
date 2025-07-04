<script setup lang="ts">
import { computed } from 'vue';

import { JimmyChane } from '@/models/Profile.model';
import { useNavigationDrawerStore } from '@/stores/navigation-drawer.store';
import { FAVOURITE_ROUTE, FURSONA_ROUTE, PROJECT_ROUTE } from '@/stores/navigation.store';
import { useWindowStore } from '@/stores/store';

import AppPage from '@/layout/navigation/components/page/AppPage.vue';

import PFP from './components/PageHome-header-pfp.vue';
import Labels from './components/PageHome-labels.vue';
import Social from './components/PageHome-social.vue';

const navigationDrawerStore = useNavigationDrawerStore();
const windowStore = useWindowStore();

const profile = computed(() => JimmyChane);

const routes = computed(() => [FURSONA_ROUTE, PROJECT_ROUTE, FAVOURITE_ROUTE]);

const isUsingDrawer = computed(() => {
  return navigationDrawerStore.isDrawer && !windowStore.isLargerThanMobile;
});
</script>

<template>
  <AppPage>
    <div class="home-page">
      <div class="home-page-grid">
        <PFP style="grid-area: img" />

        <h1 class="PageHome-name" style="grid-area: name">
          {{ profile.name }}
        </h1>

        <Labels :labels="profile.labels" />

        <div class="home-page-socials" style="grid-area: socials">
          <Social
            v-for="social of profile.socials"
            :key="social.socialPlatform.title"
            :item="social"
          />
        </div>

        <p class="home-page-description" style="grid-area: description">
          {{ profile.description }}
        </p>
      </div>

      <div v-if="isUsingDrawer" class="home-page-routes">
        <RouterLink v-for="route of routes" :key="route.id" :to="{ name: route.id }">
          {{ route.title }}
        </RouterLink>
      </div>
    </div>
  </AppPage>
</template>

<style lang="scss" scoped>
.home-page {
  min-height: calc(
    100dvh - var(--statusbar-height) - var(--App-page-padding) - var(--App-page-padding)
  );
  min-height: 55dvh;
  gap: 3rem;

  display: flex;
  flex-direction: column;

  .home-page-grid {
    width: 100%;
    transition: all 0.3s;

    display: grid;
    grid-template-areas:
      'img'
      'name'
      'labels'
      'socials'
      'description';
    justify-content: center;
    align-items: center;
    place-items: start;
    gap: 0.5rem 2rem;

    .PageHome-name {
      font-weight: 600;
      font-size: 2rem;
      text-align: center;
    }
    .home-page-socials {
      width: 100%;
      gap: 0.4rem;
      margin: 1rem 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      @media (max-width: 28rem) {
        gap: initial;
      }
    }
    .home-page-description {
      font-size: 1.2rem;
      text-wrap: balance;
    }

    @media (max-width: 849px) {
      place-items: center;
      font-size: 0.8rem;

      & > * {
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }
    @media (min-width: 850px) {
      display: grid;
      grid-template-areas:
        'img name'
        'img labels'
        'img socials'
        'img description';
      justify-content: start;
      align-items: start;
      gap: 0.5rem 2rem;

      .PageHome-name {
        width: 100%;
        grid-row: 0;
        font-size: 3rem;
        text-align: start;
        display: flex;

        place-self: end;
      }
      .home-page-socials {
        grid-row: 1fr;
        place-self: start;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }
  }
  .home-page-routes {
    gap: 0.5rem;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));

    & > * {
      text-decoration: none;
      text-align: center;
      font-size: 1rem;
      padding: 1rem;
      border-radius: 0.5rem;
      transition: all 200ms ease;

      display: grid;
      place-items: center;

      @media (min-width: 700px) {
        aspect-ratio: 4/3;
      }
      @media (max-width: 699px) {
        aspect-ratio: 4/2;
      }

      &:nth-child(1) {
        background-color: var(--section-fursona-background-color);
        color: white;
      }
      &:nth-child(2) {
        background-color: var(--color-dark);
        color: white;
      }
      &:nth-child(3) {
        background-color: var(--background-color-opacity60);
        color: inherit;

        &:hover {
          background-color: var(--background-color-opacity70);
        }
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
