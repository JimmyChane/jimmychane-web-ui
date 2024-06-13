<script setup lang="ts">
  import { type Social } from '@/data/Social';

  defineProps<{ item: Social }>();
</script>

<template>
  <a class="page-home-social" target="_blank" :href="item.href">
    <img
      :src="item.socialPlatform.icon"
      :alt="item.socialPlatform.title"
      loading="lazy"
      :data-invert="item.socialPlatform.useInvertColorOnDark"
    />
    <span>{{ item.socialPlatform.title }}</span>
  </a>
</template>

<style scoped lang="scss">
  .page-home-social {
    width: 100%;
    max-width: 10rem;
    gap: 0.8rem;
    padding: 0.6rem 0.7rem;
    font-size: 1.2rem;
    border-radius: 0.8rem;

    color: var(--text-color);
    text-decoration: none;
    transition: 0.3s;
    background: var(--background-color-opacity60);

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
      &[data-invert='true'] {
        filter: var(--icon-dark-invert);
      }
    }

    @media (max-width: 28rem) {
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
</style>
