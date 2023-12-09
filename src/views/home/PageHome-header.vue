<script setup lang="ts">
  import PFP from './PageHome-header-pfp.vue';

  import TwitterLogo from '@/assets/social/twitter-color.svg';
  import TelegramLogo from '@/assets/social/telegram-color.svg';
  import GithubLogo from '@/assets/social/github-color.svg';
  import BlueskyLogo from '@/assets/social/bluesky-color-w32.png';

  const labels = ['Programmer', 'Artist'];
  const socials = [
    {
      href: 'https://twitter.com/jimmykajun',
      title: 'Twitter',
      icon: TwitterLogo,
    },
    {
      href: 'https://t.me/Jimmy612',
      title: 'Telegram',
      icon: TelegramLogo,
    },
    {
      href: 'https://github.com/JimmyChane',
      title: 'Github',
      icon: GithubLogo,
    },
    {
      href: 'https://bsky.app/profile/jimmyfox.bsky.social',
      title: 'Bluesky',
      icon: BlueskyLogo,
    },
  ];
</script>

<template>
  <div class="PageHome-header">
    <PFP :style="{ 'grid-area': 'img' }" />

    <h1 class="PageHome-name" :style="{ 'grid-area': 'name' }">Jimmy Chane</h1>

    <div class="PageHome-labels" :style="{ 'grid-area': 'labels' }">
      <div v-for="label of labels" :key="label">
        <span>{{ label }}</span>
        <div v-if="labels.indexOf(label) < labels.length - 1" class="PageHome-labels-dot"></div>
      </div>
    </div>

    <div class="PageHome-socials" :style="{ 'grid-area': 'socials' }">
      <a v-for="social in socials" :key="social.title" target="_blank" :href="social.href">
        <img
          :class="social.title === 'Github' ? 'useInvert' : ''"
          :src="social.icon"
          :alt="social.title"
          loading="lazy"
        />
        <span>{{ social.title }}</span>
      </a>
    </div>

    <p class="PageHome-description" :style="{ 'grid-area': 'description' }">
      Hi, I'm Jimmy Chane, and this is my website where I showcase my programming and drawing
      talents.
    </p>
  </div>
</template>

<style lang="scss" scoped>
  .PageHome-header {
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

        background: hsl(0, 0%, 20%);
        background: var(--text-color-opacity50);
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

      & > * {
        width: 100%;
        max-width: 10rem;
        gap: 0.8rem;
        padding: 0.6rem 0.7rem;
        font-size: 1.2rem;
        border-radius: 0.8rem;

        color: var(--text-color);
        text-decoration: none;
        transition: 0.3s;
        background: var(--background-color-opacity70);

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        &:hover {
          transform: translateY(-0.1em);
        }

        img {
          width: 1.4rem;
          height: 1.4rem;
          object-fit: contain;
        }
        img.useInvert {
          filter: var(--icon-dark-invert);
        }
      }

      @media (max-width: 28rem) {
        gap: initial;
        & > * {
          max-width: initial;
          width: 3.5rem;
          height: 3.5rem;
          padding: initial;

          aspect-ratio: 1/1;
          background: none;
          border: none;

          &:hover {
            background: white;
          }

          span {
            display: none;
          }
          img {
            width: 1.6rem;
            height: 1.6rem;
          }
        }
      }
    }
    .PageHome-description {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 850px) {
    .PageHome-header {
      place-items: center;
      font-size: 0.8rem;

      & > * {
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }
  }
  @media (min-width: 850px) {
    .PageHome-header {
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
