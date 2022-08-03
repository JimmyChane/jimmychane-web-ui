<script lang="ts">
   import { Options, Vue } from "vue-class-component";

   @Options({
      components: {},
   })
   export default class IntroPage extends Vue {}
</script>

<template>
   <div class="IntroPage">
      <div class="IntroPage-characteristics">
         <span
            >I am <span :style="{ 'background-color': '#fcd75f' }">yellow</span> 🦊</span
         >

         <br />

         <span
            >I have <span :style="{ 'background-color': '#fcd75f' }">yellow</span> ear
            with upper
            <span :style="{ 'background-color': '#222222', color: 'white' }">black</span>
            color</span
         >
         <span
            >I have
            <span :style="{ 'background-color': '#529FD5', color: 'white' }">blue</span>
            hair</span
         >
         <span
            >I have
            <span :style="{ 'background-color': '#332D1D', color: 'white' }">brown</span>
            eyes paired with
            <span :style="{ 'background-color': '#222222', color: 'white' }">black</span>
            eyebrows</span
         >
         <span
            >I have
            <span :style="{ 'background-color': '#222222', color: 'white' }">black</span>
            nose
         </span>
         <span
            >I have
            <span :style="{ 'background-color': '#706546', color: 'white' }">brown</span>
            collar</span
         >

         <span
            >I have
            <span :style="{ 'background-color': '#F1F1F1', color: 'black' }">white</span>
            tummy</span
         >

         <span>
            I have <span :style="{ 'background-color': '#fcd75f' }">yellow</span> tail
            half ended with
            <span :style="{ 'background-color': '#F1F1F1', color: 'black' }">white</span>
            color</span
         >

         <br />

         <span
            >A
            <span :style="{ 'background-color': '#6CC6FA', color: 'white' }">blue</span>
            🐺 love me</span
         >

         <span>Call me Jimmy<span :style="{ 'font-size': '0.4rem' }">Jimbo</span></span>
      </div>
   </div>
</template>

<style lang="scss" scoped>
   .IntroPage {
      display: flex;
      flex-direction: column;

      .IntroPage-characteristics {
         padding: 0 4em;
         align-items: flex-start;
      }
   }
</style>
