<script>
   import AppNav from "./App-Nav.vue";
   export default {
      components: { AppNav },
      data: () => ({
         routes: [
            { path: "/", title: "About" },
            { path: "/code", title: "Projects" },
            // { path: "/art", title: "Art" },
            { path: "/fursona", title: "Fursona" },
         ],
      }),
   };
</script>

<template>
   <div class="App-footer">
      <span>Updated on 2023 May 19</span>
   </div>
</template>

<style lang="scss" scoped>
   .App-footer {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: hsla(0, 0%, 100%, 0.5);
      @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
         --blur: 1rem;
         -webkit-backdrop-filter: blur(var(--blur));
         backdrop-filter: blur(var(--blur));
      }

      & > * {
         padding: 0.5em 1em;
         font-size: 0.8em;
      }
   }
</style>
