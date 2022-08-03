<script lang="ts">
   import { Options, Vue } from "vue-class-component";
   import AppNavigationItem from "@/AppNavigationItem.vue";

   @Options({
      components: { AppNavigationItem },
      data() {
         return {
            navigations: [
               { key: "home", title: "Home" },
               { key: "intro", title: "Intro" },
               { key: "gallery", title: "Gallery" },
            ],
         };
      },
      computed: {
         currentRouteKey: (context: Vue) => context.$route.name,
      },
      mounted() {},
   })
   export default class App extends Vue {}
</script>

<template>
   <div class="App">
      <div class="App-background">
         <p class="App-background-1">
            Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane
         </p>
         <p class="App-background-2">
            Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane
         </p>
         <p class="App-background-3">
            Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane
         </p>
         <p class="App-background-4">
            Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane
         </p>
         <p class="App-background-5">
            Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane
         </p>
         <p class="App-background-6">
            Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane
         </p>
      </div>

      <div class="App-body">
         <div class="App-header">
            <div class="App-profile">
               <img src="@/assets/photo_2022-07-17_09-49-51.jpg" />
            </div>
            <div class="App-navigation">
               <router-link
                  v-for="nav of navigations"
                  :key="nav.key"
                  :to="{ name: nav.key }"
               >
                  <AppNavigationItem
                     :title="nav.title"
                     :isSelected="currentRouteKey === nav.key"
                  />
               </router-link>
            </div>
         </div>

         <router-view />
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
   // initial
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
      position: relative;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(140.09deg, #e0f7f2 10.49%, #f6dbdb 90.41%);

      display: flex;
      flex-direction: column;
      align-items: center;
      overflow-x: hidden;
      overflow-y: auto;

      .App-background {
         z-index: 1;
         position: absolute;
         top: 0;
         width: 100%;
         font-size: 2.4em;
         font-weight: 600;
         overflow: hidden;
         line-height: 1;

         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: flex-start;
         gap: 0.2em;
         opacity: 0.05;

         & > * {
            width: max-content;
            padding: 0;
            margin: 0;
         }

         .App-background-1 {
            transform: translateX(-12%);
         }
         .App-background-2 {
            transform: translateX(-6%);
         }
         .App-background-3 {
            transform: translateX(0%);
         }
         .App-background-4 {
            transform: translateX(6%);
         }
         .App-background-5 {
            transform: translateX(12%);
         }
         .App-background-6 {
            transform: translateX(18%);
         }
      }

      .App-body {
         z-index: 2;
         width: 100%;
         max-width: 35em;
         display: flex;
         flex-direction: column;
         align-items: stretch;

         .App-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1em;

            .App-profile {
               --size: 9em;
               width: var(--size);
               height: var(--size);
               display: flex;
               border-radius: 50%;
               box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
               overflow: hidden;
               transform: translateY(15%);
               img {
                  width: var(--size);
                  height: var(--size);
                  object-fit: contain;
               }
            }
            .App-navigation {
               width: 100%;
               max-width: fit-content;

               background: hsla(0, 0%, 100%, 0.3);
               box-shadow: 0px 0.25em 2.5em rgba(0, 0, 0, 0.24);
               border-radius: 0.6em;
               padding: 1em 2em;

               display: flex;
               flex-direction: row;
               flex-wrap: wrap;
               align-items: center;
               justify-content: center;
               column-gap: 3em;
               row-gap: 0.3em;
               overflow-x: auto;

               & > * {
                  width: max-content;
                  text-decoration: none;
                  & > {
                     width: max-content;
                  }
               }
            }
         }
      }

      .App-footer {
         width: 100%;
         padding: 4em 0;

         display: flex;
         flex-direction: column;
         align-items: center;

         margin-top: 2em;
         background-image: linear-gradient(180deg, #ffffff00, #fcd75f);

         img {
            width: fit-content;
            height: 20em;
            height: 6em;
            transform: rotateY(180deg);
         }
      }
   }
</style>
