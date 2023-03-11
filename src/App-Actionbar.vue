<script>
   import AppNav from "./App-Nav.vue";
   export default { components: { AppNav } };
</script>

<template>
   <div class="App-actionbar">
      <div class="App-actionbar-items">
         <AppNav path="/" title="Home" />
         <AppNav path="/code" title="Code" />
         <!-- <AppNav path="/art" title="Art" /> -->
         <AppNav path="/fursona" title="Fursona" />
      </div>
   </div>
</template>

<style lang="scss" scoped>
   .App-actionbar {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      position: sticky;
      top: 0;

      background-color: hsla(0, 0%, 100%, 0.5);
      --blur: 1rem;
      @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
         -webkit-backdrop-filter: blur(var(--blur));
         backdrop-filter: blur(var(--blur));
      }

      .App-actionbar-items {
         gap: 1.2rem;
         padding: 0.5rem;
         padding: 1rem;

         display: flex;
         flex-direction: row;
         justify-content: flex-start;
         align-items: center;

         overflow-y: auto;
      }
   }
</style>
