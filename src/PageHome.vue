<script>
   import Header from "./PageHome-header.vue";
   export default { components: { Header } };
</script>

<template>
   <div class="PageHome">
      <Header />

      <p
         >Hi, I'm Jimmy Chane, and this is my website where I showcase my
         programming and drawing talents.</p
      >
   </div>
</template>

<style lang="scss">
   .PageHome {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      font-size: 1rem;
      gap: 2rem;
      padding: 3rem 2rem;

      p {
         max-width: 35rem;
      }
   }
</style>
