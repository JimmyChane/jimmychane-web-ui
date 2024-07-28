<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
    href?: string;
  }>(),
  {
    title: '',
    subtitle: '',
    href: '',
  },
);
</script>

<template>
  <div class="PageFursona-header">
    <a class="PageCode-title" v-if="title.length && href.length" :href="href" target="_blank">
      <h3>{{ title }}</h3>
    </a>
    <h3 class="PageCode-title" v-if="title.length && !href.length">
      {{ title }}
    </h3>
    <span class="PageCode-subtitle" v-if="subtitle.length">{{ subtitle }}</span>
  </div>
</template>

<style lang="scss" scoped>
.PageFursona-header {
  width: 100%;
  margin-top: 2em;
  margin-bottom: 1.5em;

  display: flex;
  flex-direction: column;

  .PageCode-title {
    width: 100%;
    text-decoration: none;
    color: white;
    font-size: 1.1em;

    h3 {
      width: 100%;
    }
  }
  a.PageCode-title {
    &:hover {
      text-decoration: underline;
    }
  }

  .PageCode-subtitle {
    font-size: 0.8em;
    color: white;
  }
}
</style>
