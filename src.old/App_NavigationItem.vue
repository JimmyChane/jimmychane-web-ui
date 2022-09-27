<script lang="ts">
   import { Vue, Options } from "vue-class-component";

   @Options({
      props: {
         title: { type: String, default: "" },
         isSelected: { type: Boolean, default: false },
      },
   })
   export default class HomeNavigationItem extends Vue {}
</script>

<template>
   <div
      class="HomeNavigationItem"
      :class="[
         isSelected ? 'HomeNavigationItem-isSelected' : 'HomeNavigationItem-isDeselected',
      ]"
   >
      <span class="HomeNavigationItem-title">{{ title }}</span>
      <div class="HomeNavigationItem-highlight"></div>
   </div>
</template>

<style lang="scss" scoped>
   .HomeNavigationItem {
      width: max-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: none;
      font-size: 1em;
      font-family: inherit;
      color: black;
      background: none;

      --highlight-height: 0.3em;
      --padding: 0.8em;
      --primary-color: #71dcc8;

      padding: var(--padding);
      padding-top: calc(var(--padding) + var(--highlight-height));
      padding-bottom: calc(var(--padding) / 2);
      gap: var(--padding);

      .HomeNavigationItem-title {
         width: max-content;
         transition: all 0.3s;
      }

      .HomeNavigationItem-highlight {
         width: 66%;
         min-height: var(--highlight-height);
         border-radius: var(--highlight-height);
         background: var(--primary-color);
         transition: all 0.3s;
      }

      &:hover,
      &:focus {
         cursor: pointer;
         .HomeNavigationItem-title {
            opacity: 1;
         }
         .HomeNavigationItem-highlight {
            opacity: 1;
         }
      }
   }

   .HomeNavigationItem-isSelected {
      .HomeNavigationItem-title {
         opacity: 1;
      }
      .HomeNavigationItem-highlight {
         opacity: 1;
      }
   }
   .HomeNavigationItem-isDeselected {
      .HomeNavigationItem-title {
         opacity: 0.65;
      }
      .HomeNavigationItem-highlight {
         opacity: 0;
         pointer-events: none;
      }
   }
</style>
