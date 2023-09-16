<script setup>
  defineProps({
    title: { type: String, default: "" },
    subtitle: { type: String, default: "" },
    href: { type: String, default: "" },
  });
</script>

<template>
  <div class="PageCode-header">
    <a
      class="PageCode-title"
      v-if="title.length && href.length"
      :href="href"
      target="_blank"
    >
      <h3>{{ title }}</h3>
    </a>
    <h3 class="PageCode-title" v-if="title.length && !href.length">{{
      title
    }}</h3>
    <span class="PageCode-subtitle" v-if="subtitle.length">{{ subtitle }}</span>
  </div>
</template>

<style lang="scss" scoped>
  .PageCode-header {
    width: 100%;
    display: flex;
    flex-direction: column;

    .PageCode-title {
      width: 100%;
      text-decoration: none;
      color: inherit;
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
      color: hsla(0, 0%, 100%, 0.8);
      font-size: 0.9em;
    }
  }
</style>
