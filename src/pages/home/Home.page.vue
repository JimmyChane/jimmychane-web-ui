<script setup lang="ts">
import { JimmyChane } from '@/models/Profile.model';
import { FAVOURITE_ROUTE, FURSONA_ROUTE, PROJECT_ROUTE } from '@/stores/navigation.store';

import AppPage from '@/layout/navigation/components/page/AppPage.vue';

import HomeRouteButton from './components/HomeRouteButton.vue';
import PFP from './components/PageHome-header-pfp.vue';
import Labels from './components/PageHome-labels.vue';
import Social from './components/PageHome-social.vue';
</script>

<template>
  <AppPage>
    <div class="home-page">
      <div class="home-page-grid">
        <PFP style="grid-area: img" />

        <h1 class="PageHome-name" style="grid-area: name">{{ JimmyChane.name }}</h1>

        <Labels :labels="JimmyChane.labels" />

        <div class="home-page-socials" style="grid-area: socials">
          <Social v-for="social of JimmyChane.socials" :key="social.socialPlatform.title" :item="social" />
        </div>

        <p class="home-page-description" style="grid-area: description">
          {{ JimmyChane.description }}
        </p>
      </div>

      <div class="home-page-routes">
        <HomeRouteButton :route="FURSONA_ROUTE">
          <template #description>My character design</template>
        </HomeRouteButton>
        <HomeRouteButton :route="PROJECT_ROUTE">
          <template #description>Latest work</template>
        </HomeRouteButton>
        <HomeRouteButton :route="FAVOURITE_ROUTE">
          <template #description>Things I love</template>
        </HomeRouteButton>
      </div>
    </div>
  </AppPage>
</template>

<style lang="scss" scoped>
.home-page {
  gap: 3rem;

  display: flex;
  flex-direction: column;

  .home-page-grid {
    width: 100%;
    min-height: max-content;

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
    width: 100%;

    gap: 0.5rem;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
