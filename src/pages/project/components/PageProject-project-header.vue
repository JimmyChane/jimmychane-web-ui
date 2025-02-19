<script setup lang="ts">
withDefaults(
  defineProps<{ title?: string; subtitle?: string; href?: string }>(),
  { title: '', subtitle: '', href: '' },
);
</script>

<template>
  <div class="PageCode-header">
    <a
      class="PageCode-title"
      v-if="title.length && href.length"
      :href="href"
      target="_blank"
    >
      <h3>
        {{ title }}
        <img
          class="PageCode-link-icon"
          src="@/assets/icon/link.svg"
          alt="Link Icon"
          loading="lazy"
        />
      </h3>
    </a>
    <h3 class="PageCode-title" v-if="title.length && !href.length">
      {{ title }}
    </h3>
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
    width: max-content;
    display: flex;
    flex-direction: row;

    &:hover {
      text-decoration: underline;
    }
    .PageCode-link-icon {
      width: 0.7em;
      height: 0.7em;
      transform: translateY(-0.3em) translateX(-0.1em);
      filter: invert(100%);
    }
  }

  .PageCode-subtitle {
    color: hsla(0, 0%, 100%, 0.8);
    font-size: 0.9em;
  }
}
</style>
