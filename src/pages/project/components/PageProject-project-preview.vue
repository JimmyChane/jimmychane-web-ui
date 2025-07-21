<script setup lang="ts">
withDefaults(defineProps<{ href?: string; src?: string; alt?: string }>(), { href: '', src: '', alt: '' });
</script>

<template>
  <a class="PageCode-preview" :href="href" target="_blank">
    <img class="PageCode-preview" :src="src" :alt="alt" loading="lazy" />
  </a>
</template>

<style lang="scss" scoped>
a.PageCode-preview {
  border-radius: 1em;
  width: 100%;
  max-width: 20rem;

  img.PageCode-preview {
    width: inherit;
    max-width: inherit;
    margin: auto;
    border-radius: 1em;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  }
}
</style>
