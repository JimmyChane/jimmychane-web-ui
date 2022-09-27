<script lang="ts">
   import { Options, Vue } from "vue-class-component";

   @Options({
      components: {},
   })
   export default class ProjectPage extends Vue {}
</script>

<template>
   <div class="ProjectPage">
      <p>I maintain <a href="https://freshnet.app">freshnet.app</a></p>
   </div>
</template>

<style lang="scss" scoped>
   .ProjectPage {
      display: flex;
      flex-direction: column;

      .ProjectPage-characteristics {
         padding: 0 4em;
         align-items: flex-start;
      }
   }
</style>
