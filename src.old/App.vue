<script lang="ts">
   import { Options, Vue } from "vue-class-component";
   import AppNavigationItem from "@/App_NavigationItem.vue";
   import AppHeader from "@/App_Header.vue";

   @Options({
      components: { AppNavigationItem, AppHeader },
      computed: {
         currentRouteKey: (context: Vue) => context.$route.name,
      },
      mounted() {},
   })
   export default class App extends Vue {}
</script>

<template>
   <div class="App">
      <div class="App-body">
         <AppHeader />

         <div class="App-main">
            <router-view class="App-router" />
         </div>
      </div>

      <div class="App-footer">
         <img src="@/assets/1590379855918.png" />
      </div>
   </div>
</template>

<style lang="scss">
   // global
   * {
      word-break: break-all;
      text-overflow: clipsssss;
   }
   body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
   }
   div {
      display: flex;
      flex-direction: column;
   }
   span,
   p,
   a {
      word-break: keep-all;
   }
   // app id
   #app {
      font-family: "Comic Sans MS", Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
   }

   .App {
      // position: relative;
      min-width: 100vw;
      min-height: 100vh;
      background: linear-gradient(140.09deg, #e0f7f2 10.49%, #f6dbdb 90.41%);

      display: flex;
      flex-direction: column;
      align-items: center;

      .App-body {
         z-index: 2;
         width: 100%;
         display: flex;
         flex-direction: column;
         align-items: center;
         flex-grow: 1;

         .App-header {
         }
         .App-main {
            width: 100%;
            padding: 2rem;

            display: flex;
            flex-direction: column;
            align-items: center;
            flex-grow: 1;

            .App-router {
               width: 100%;
               max-width: 35em;
            }
         }
      }

      .App-footer {
         width: 100%;
         padding: 4em 0;

         display: flex;
         flex-direction: column;
         align-items: center;
         flex-grow: 0;

         margin-top: 2em;
         background-image: linear-gradient(180deg, #ffffff00, #fcd75f);

         img {
            height: 20em;
            height: 6em;
            transform: rotateY(180deg);
         }
      }
   }
</style>
