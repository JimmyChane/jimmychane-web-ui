<script setup lang="ts">
  import Page from '@/components/Page.vue';
  import PFP from './components/PageHome-header-pfp.vue';
  import SocialVue from './components/PageHome-social.vue';
  import { Twitter, type Social, Telegram, Github, Bluesky } from '@/data/Social';

  const labels = ['Programmer', 'Artist'];
  const socials: Social[] = [Twitter, Telegram, Github, Bluesky];
</script>

<template>
  <Page>
    <div class="PageHome">
      <div class="PageHome-grid">
        <PFP style="grid-area: img" />

        <h1 class="PageHome-name" style="grid-area: name">Jimmy Chane</h1>

        <div class="PageHome-labels" style="grid-area: labels">
          <div v-for="label of labels" :key="label">
            <span>{{ label }}</span>
            <div v-if="labels.indexOf(label) < labels.length - 1" class="PageHome-labels-dot"></div>
          </div>
        </div>

        <div class="PageHome-socials" style="grid-area: socials">
          <SocialVue v-for="social in socials" :key="social.title" :item="social" />
        </div>

        <p class="PageHome-description" style="grid-area: description">
          Hi, I'm Jimmy Chane, and this is my website where I showcase my programming and drawing
          talents.
        </p>
      </div>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
  .PageHome {
    min-height: 55dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .PageHome-grid {
    width: 100%;
    max-width: var(--content-max-width);
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
    .PageHome-labels {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 0.5rem;
      & > * {
        display: inherit;
        flex-direction: inherit;
        align-items: inherit;
        gap: inherit;
      }

      .PageHome-labels-dot {
        display: flex;
        line-height: 1rem;

        --size: 4px;
        --width: var(--size);
        --height: var(--size);

        width: var(--width);
        min-width: var(--width);
        max-width: var(--width);
        height: var(--height);
        min-height: var(--height);
        max-height: var(--height);

        background: var(--color-active);
        border-radius: 50%;
        overflow: hidden;
      }
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

    @media (max-width: 850px) {
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
      .PageHome-labels {
        width: 100%;
        grid-row: 0;
        place-self: start;
        justify-content: flex-start;
      }
      .PageHome-socials {
        grid-row: 1fr;
        place-self: start;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }
  }
</style>
