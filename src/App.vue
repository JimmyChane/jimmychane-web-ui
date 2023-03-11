<script>
   import Actionbar from "./App-Actionbar.vue";

   export default {
      components: { Actionbar },
      data: (c) => ({ scrollTop: 0 }),
   };
</script>

<template>
   <div class="App" @scroll="(event) => (scrollTop = event.target.scrollTop)">
      <Actionbar style="z-index: 2" />

      <div class="App-body" style="z-index: 1">
         <router-view class="App-Page" />
      </div>
   </div>
</template>

<style lang="scss">
   .App {
      @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
      font-family: "Roboto", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: black;

      background: linear-gradient(140.09deg, #e0f7f2 10.49%, #f6dbdb 90.41%);

      width: 100%;
      min-height: 100dvh;
      flex-grow: 1;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      position: relative;

      .App-body {
         flex-grow: 1;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
      }
   }
</style>
