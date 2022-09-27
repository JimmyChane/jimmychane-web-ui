<script lang="ts">
   import { Options, Vue } from "vue-class-component";
   import AppNavigationItem from "@/App_NavigationItem.vue";

   @Options({
      components: { AppNavigationItem },
      data() {
         return {
            navigations: [
               { key: "home", title: "Home" },
               { key: "intro", title: "Intro" },
               { key: "gallery", title: "Gallery" },
               { key: "project", title: "Projects" },
            ],
         };
      },
      computed: {
         currentRouteKey: (context: Vue) => context.$route.name,
      },
   })
   export default class AppHeader extends Vue {}
</script>

<template>
   <div class="AppHeader">
      <div class="AppHeader-body">
         <div class="AppHeader-background">
            <p class="AppHeader-background-1">
               Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane
            </p>
            <p class="AppHeader-background-2">
               Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane
            </p>
            <p class="AppHeader-background-3">
               Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane
            </p>
            <p class="AppHeader-background-4">
               Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane
            </p>
            <p class="AppHeader-background-5">
               Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane
            </p>
            <p class="AppHeader-background-6">
               Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane Jimmy Chane
            </p>
         </div>
         <div class="AppHeader-profile">
            <img src="@/assets/photo_2022-07-17_09-49-51.jpg" />
         </div>
         <div class="AppHeader-navigation">
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
   </div>
</template>

<style lang="scss">
   .AppHeader {
      position: sticky;
      top: 0;

      width: 100%;
      background: hsla(0, 0%, 100%, 0.5);
      background: hsla(0, 0%, 100%, 0.98);
      box-shadow: 0px 0.25em 2.5em rgba(0, 0, 0, 0.1);

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .AppHeader-body {
         position: relative;

         width: 100%;
         height: 100%;
         padding: 1em;
         overflow: hidden;

         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;

         .AppHeader-background {
            z-index: 1;
            position: absolute;
            width: 100%;
            height: 100%;
            font-size: 2.4em;
            font-weight: 600;
            overflow: hidden;
            line-height: 1;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 0.2em;
            opacity: 0.02;

            & > * {
               width: max-content;
               padding: 0;
               margin: 0;
            }

            .AppHeader-background-1 {
               transform: translateX(-12%);
            }
            .AppHeader-background-2 {
               transform: translateX(-6%);
            }
            .AppHeader-background-3 {
               transform: translateX(0%);
            }
            .AppHeader-background-4 {
               transform: translateX(6%);
            }
            .AppHeader-background-5 {
               transform: translateX(12%);
            }
            .AppHeader-background-6 {
               transform: translateX(18%);
            }
         }
         .AppHeader-profile {
            z-index: 2;
            --size: 9em;
            width: var(--size);
            height: var(--size);
            display: flex;
            border-radius: 50%;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            img {
               width: var(--size);
               height: var(--size);
               object-fit: contain;
            }
         }
         .AppHeader-navigation {
            z-index: 2;

            width: 100%;
            max-width: fit-content;

            border-radius: 0.6em;
            padding: 1em 2em;
            column-gap: 3em;
            row-gap: 0.3em;
            overflow-x: auto;

            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;

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
</style>
