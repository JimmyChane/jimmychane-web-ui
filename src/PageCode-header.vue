<script>
   export default {
      props: {
         title: { type: String, default: "" },
         subtitle: { type: String, default: "" },
         href: { type: String, default: "" },
      },
   };
</script>

<template>
   <div class="PageCode-header">
      <a
         class="PageCode-title PageCode-title-a"
         v-if="title.length && href.length"
         :href="href"
         target="_blank"
      >
         <h1>{{ title }}</h1>
      </a>
      <h1 class="PageCode-title" v-if="title.length && !href.length">{{
         title
      }}</h1>
      <span class="PageCode-subtitle" v-if="subtitle.length">{{
         subtitle
      }}</span>
   </div>
</template>

<style lang="scss" scoped>
   .PageCode-header {
      max-width: 100%;
      display: flex;
      flex-direction: column;

      .PageCode-title {
         max-width: max-content;
         margin: 0;
         text-decoration: none;
         color: inherit;

         h1 {
            margin: 0;
            width: max-content;
         }
      }
      .PageCode-title-a {
         &:hover {
            text-decoration: underline;
         }
      }

      .PageCode-subtitle {
         color: rgba(0, 0, 0, 0.8);
         font-size: 0.9em;
      }
   }
</style>
