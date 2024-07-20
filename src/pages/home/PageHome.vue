<script setup lang="ts">
  import AppPage from '@/app/page/AppPage.vue';
  import PFP from './components/PageHome-header-pfp.vue';
  import SocialVue from './components/PageHome-social.vue';
  import { JimmyChane } from '@/data/Profile';
  import { computed } from 'vue';
  import Labels from './components/PageHome-labels.vue';

  const name = computed(() => JimmyChane.name);
  const labels = computed(() => JimmyChane.labels);
  const socials = computed(() => JimmyChane.socials);
  const description = computed(() => JimmyChane.description);
</script>

<template>
  <AppPage>
    <div class="PageHome">
      <div class="PageHome-grid">
        <PFP style="grid-area: img" />

        <h1 class="PageHome-name" style="grid-area: name">{{ name }}</h1>

        <Labels :labels="labels" />

        <div class="PageHome-socials" style="grid-area: socials">
          <SocialVue v-for="social of socials" :key="social.socialPlatform.title" :item="social" />
        </div>

        <p class="PageHome-description" style="grid-area: description">
          {{ description }}
        </p>
      </div>
    </div>
  </AppPage>
</template>

<style lang="scss" scoped>
  .PageHome {
    height: calc(
      100dvh - var(--statusbar-height) - var(--App-page-padding) - var(--App-page-padding)
    );
    min-height: 55dvh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .PageHome-grid {
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
      .PageHome-socials {
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
      .PageHome-description {
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
        .PageHome-socials {
          grid-row: 1fr;
          place-self: start;
          align-items: flex-start;
          justify-content: flex-start;
        }
      }
    }
  }
</style>
