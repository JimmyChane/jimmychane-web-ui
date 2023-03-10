<script>
   import AppNav from "./App-Nav.vue";

   export default {
      components: { AppNav },
      data: (c) => ({ scrollTop: 0 }),
      mounted() {
         window.addEventListener("resize", this.onResize);
         this.onResize();
      },
      unmounted() {
         window.removeEventListener("resize", this.onResize);
      },
      methods: {
         onResize() {
            const vh = window.innerHeight * 0.01;
            document.body.style.setProperty("--vh", `${vh}px`);
         },
      },
   };
</script>

<template>
   <div class="App" @scroll="(event) => (scrollTop = event.target.scrollTop)">
      <!-- <div class="App-actionbar">
         <div class="App-actionbar-items">
            <AppNav path="/" title="Home" />
            <AppNav path="/code" title="Project Code" />
            <AppNav path="/art" title="Furry Artist" />
            <AppNav path="/fursona" title="Fursona" />
         </div>
      </div> -->

      <router-view />
   </div>
</template>

<style lang="scss">
   .App {
      font-family: "Comic Sans MS", Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: black;

      width: 100%;
      min-height: 100dvh;
      flex-grow: 1;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      position: relative;

      .App-actionbar {
         z-index: 2;
         width: 100%;
         display: flex;
         flex-direction: row;
         justify-content: center;
         align-items: center;

         position: sticky;
         top: 0;

         background-color: hsla(0, 0%, 100%, 0.5);
         @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
            -webkit-backdrop-filter: blur(2rem);
            backdrop-filter: blur(2rem);
         }

         .App-actionbar-items {
            gap: 1.2rem;
            padding: 0.5rem;

            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            overflow-y: auto;
         }
      }
   }
</style>
