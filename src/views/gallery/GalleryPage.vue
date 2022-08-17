<script lang="ts">
   import { Options, Vue } from "vue-class-component";
   import GalleryItem from "@/views/gallery/GalleryItem.vue";

   @Options({
      components: { GalleryItem },
      mounted() {},
   })
   export default class GalleryPage extends Vue {}
</script>

<template>
   <div class="GalleryPage">
      <div class="GalleryPage-list">
         <GalleryItem :src="require('@/assets/20220713_2205.png')" />
         <GalleryItem :src="require('@/assets/1583937876198.png')" />
         <GalleryItem :src="require('@/assets/1585149320841.png')" />
         <GalleryItem :src="require('@/assets/1589230923129.png')" />
         <GalleryItem :src="require('@/assets/1583860315816.png')" />
         <GalleryItem :src="require('@/assets/1597337670804.png')" />
         <GalleryItem :src="require('@/assets/1597416027239.png')" />
         <GalleryItem :src="require('@/assets/1597417445419.png')" />
         <GalleryItem :src="require('@/assets/1599208927208.png')" />
      </div>
   </div>
</template>

<style lang="scss" scoped>
   .GalleryPage {
      display: flex;
      flex-direction: column;
      align-items: center;

      .GalleryPage-list {
         display: grid;
         grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
      }
   }
</style>
