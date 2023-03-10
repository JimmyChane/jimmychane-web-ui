<script>
   export default {
      props: {
         path: { type: String, default: "" },
         title: { type: String, default: "" },
      },
      computed: {
         isSelected: (c) => c.$route.path === c.path,
      },
   };
</script>

<template>
   <router-link class="App-Nav" :isSelected="isSelected" :to="path">{{
      title
   }}</router-link>
</template>

<style lang="scss" scoped>
   .App-Nav {
      width: 7rem;
      padding: 0.6em 1em;
      border-radius: 2em;
      line-height: 1em;

      font-size: 1rem;
      font-weight: bold;
      color: hsl(350, 47%, 19%);
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;
   }
   .App-Nav[isSelected="true"] {
      background: hsl(350, 55%, 90%);
   }
</style>
