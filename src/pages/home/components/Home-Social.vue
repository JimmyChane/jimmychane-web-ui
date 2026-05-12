<script setup lang="ts">
import { type SocialModel } from '@/models/social.model';

defineProps<{ item: SocialModel }>();
</script>

<template>
  <a class="home-social" target="_blank" :href="item.href">
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
.dark {
  .home-social {
    border: 1px solid var(--background-color-opacity70);
  }
}
.light {
  .home-social {
    border: 1px solid var(--primary-color-200);
  }
}
.home-social {
  font-size: 1.2rem;

  width: 100%;
  max-width: 10rem;
  gap: 0.8rem;
  padding: 0.6rem 0.7rem;
  border-radius: 2em;

  color: var(--text-color);
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
}
</style>
