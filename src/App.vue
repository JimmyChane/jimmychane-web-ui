<script lang="ts">
   import { Options, Vue } from "vue-class-component";

   @Options({})
   export default class App extends Vue {}
</script>

<template>
   <div class="App">
      <div class="App-body">
         <div class="App-profile">
            <div class="App-profile-header">
               <img class="App-profile-image" src="@/assets/jimmy_fox_pfp.jpg" />
               <span class="App-profile-name">Jimmy Fox</span>
            </div>

            <div class="App-profile-links">
               <a
                  class="App-profile-link"
                  target="_blank"
                  href="https://twitter.com/jimmykajun"
                  ><img src="@/assets/twitter-color.svg" /><span>Twitter</span></a
               >

               <a class="App-profile-link" target="_blank" href="https://t.me/Jimmy612"
                  ><img src="@/assets/telegram-color.svg" /><span>Telegram</span></a
               >
            </div>
         </div>
      </div>
   </div>
</template>

<style lang="scss">
   html {
      * {
         word-break: break-all;
         text-overflow: clipsssss;
      }

      background: linear-gradient(140.09deg, #e0f7f2 10.49%, #f6dbdb 90.41%);

      body {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
         overflow-x: hidden;
         overflow-y: auto;
         div {
            display: flex;
            flex-direction: column;
         }
         span,
         p,
         a {
            word-break: keep-all;
         }

         #app {
            font-family: "Comic Sans MS", Avenir, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;
         }
      }
   }

   .App {
      min-width: 100vw;
      min-height: 100vh;

      display: flex;
      flex-direction: column;
      align-items: center;

      .App-body {
         z-index: 2;
         width: 100%;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         flex-grow: 1;

         .App-profile {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            font-size: 1rem;
            gap: 6rem;

            .App-profile-header {
               z-index: 2;
               display: flex;
               flex-direction: column;
               align-items: center;
               justify-content: center;
               gap: 0.5rem;

               .App-profile-image {
                  --image-size: 12em;
                  width: var(--image-size);
                  height: var(--image-size);

                  overflow: hidden;
                  border-radius: 50%;
                  object-fit: contain;
                  display: flex;
                  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                  transition: 0.3s;
               }
               .App-profile-name {
                  font-size: 1.6em;
                  font-weight: 900;
                  transition: 0.3s;
               }
            }

            .App-profile-links {
               gap: 0.4em;
               display: flex;
               flex-direction: column;
               align-items: flex-start;

               .App-profile-link {
                  font-size: 1.2em;

                  color: inherit;
                  text-decoration: none;
                  transition: 0.3s;

                  gap: 0.8em;
                  padding: 0.2em;

                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;

                  &:hover {
                     text-decoration: underline;
                     color: black;
                     transform: translateY(-0.2em);
                  }

                  img {
                     width: 1.4em;
                     height: 1.4em;
                  }
               }
            }

            @media (min-width: 600px) and (min-height: 600px) {
               font-size: 1.2rem;
            }
            @media (min-width: 750px) and (min-height: 750px) {
               font-size: 1.4rem;
            }
            @media (min-width: 900px) and (min-height: 900px) {
               font-size: 1.6rem;
            }
            @media (min-width: 1200px) and (min-height: 1200px) {
               font-size: 2rem;
            }
         }
      }
   }
</style>
