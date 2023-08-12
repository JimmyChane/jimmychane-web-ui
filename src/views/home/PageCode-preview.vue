<script>
  export default {
    props: {
      href: { type: String },
      src: { type: String },
    },
  };
</script>

<template>
  <a class="PageCode-preview" :href="href" target="_blank">
    <img class="PageCode-preview" :src="src" />
  </a>
</template>

<style lang="scss" scoped>
  a.PageCode-preview {
    border-radius: 1em;
    width: 20rem;
    max-width: 100%;
    img.PageCode-preview {
      width: 100%;
      width: inherit;
      max-width: inherit;
      margin: auto;
      border-radius: 1em;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    }
  }
</style>
