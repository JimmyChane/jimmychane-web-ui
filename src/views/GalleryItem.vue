<script lang="ts">
   import { Options, Vue } from "vue-class-component";

   @Options({
      components: {},
      props: { src: { type: String, default: "" } },
   })
   export default class HomeGalleryItem extends Vue {}
</script>

<template>
   <img class="HomeGalleryItem" :src="src" />
</template>

<style lang="scss" scoped>
   .HomeGalleryItem {
      aspect-ratio: 1/1;
      width: 100%;
      object-fit: cover;
      transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      transition: all 0.5s cubic-bezier(0.08, 0.82, 0.3, 1.24);
      // transition-delay: 0.1s;
      &:hover {
         transform: scale(1.4);
      }
   }
</style>
