<script lang="ts">
   import { Options, Vue } from "vue-class-component";

   @Options({
      components: {},
   })
   export default class HomePage extends Vue {}
</script>

<template>
   <div class="HomePage">
      <div class="HomePage-description">
         <p>I am Jimmy Fox, Yellow Fox from Malaysia,</p>
         <p>I am a Fox Coder and Digital Artist.</p>
         <p>
            What i usually draw are furries. if you like what i do, don't forget to give
            me a watch at twitter and to be more aware of my drawing!
         </p>
         <p>
            You can go to my Twitter
            <a target="__blank" href="https://twitter.com/jimmykajun">@jimmykajun</a>
            and Telegram
            <a target="__blank" href="https://t.me/Jimmy612">@Jimmy612</a>
         </p>

         <br />

         <p>Check out my Gallery Page.</p>
      </div>
   </div>
</template>

<style lang="scss" scoped>
   .HomePage {
      display: flex;
      flex-direction: column;
      padding: 2em;

      .HomePage-title {
         color: #48808c;
         padding: 1em;
         font-size: 2.5em;
         text-align: center;
      }
      .HomePage-description {
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         text-align: start;

         a {
            background: rgba(255, 255, 255, 1);
            text-decoration: none;
            border-radius: 0.3em;
            padding: 0.1em 0.3em;
            font-size: 0.9em;
            color: black;
            font-family: inherit;
         }
      }
   }
</style>
