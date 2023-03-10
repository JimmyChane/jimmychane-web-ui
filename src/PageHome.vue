<script>
   export default {};
</script>

<template>
   <div class="PageHome">
      <div class="PageHome-header">
         <img class="PageHome-image" src="@/assets/jimmy_fox_pfp.jpg" />
         <span class="PageHome-name">Jimmy Fox</span>
      </div>

      <div class="PageHome-links">
         <a class="PageHome-link" target="_blank" href="https://twitter.com/jimmykajun">
            <img src="@/assets/twitter-color.svg" />
            <span>Twitter</span>
         </a>

         <a class="PageHome-link" target="_blank" href="https://t.me/Jimmy612">
            <img src="@/assets/telegram-color.svg" />
            <span>Telegram</span>
         </a>
      </div>
   </div>
</template>

<style lang="scss">
   .PageHome {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      font-size: 1rem;
      gap: 6rem;
      padding: 3rem 2rem;

      .PageHome-header {
         z-index: 2;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         gap: 0.5rem;

         .PageHome-image {
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
         .PageHome-name {
            font-size: 1.6em;
            font-weight: bold;
            transition: 0.3s;
         }
      }

      .PageHome-links {
         gap: 0.4em;
         display: flex;
         flex-direction: column;
         align-items: flex-start;

         .PageHome-link {
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
</style>
