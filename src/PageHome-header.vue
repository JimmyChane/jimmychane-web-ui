<script>
   export default {
      data: () => ({ labels: ["Programmer", "Artist"] }),
   };
</script>

<template>
   <div class="PageHome-header">
      <img
         class="PageHome-image"
         :style="{ 'grid-area': 'img' }"
         src="@/assets/jimmy_fox_pfp.jpg"
      />
      <span class="PageHome-name" :style="{ 'grid-area': 'name' }"
         >Jimmy Chane</span
      >
      <div class="PageHome-labels" :style="{ 'grid-area': 'labels' }">
         <div v-for="label of labels" :key="label">
            <span>{{ label }}</span>
            <div
               v-if="labels.indexOf(label) < labels.length - 1"
               class="PageHome-labels-dot"
            ></div>
         </div>
      </div>

      <div class="PageHome-socials" :style="{ 'grid-area': 'socials' }">
         <a target="_blank" href="https://twitter.com/jimmykajun">
            <img src="@/assets/twitter-color.svg" />
            <span>Twitter</span>
         </a>

         <a target="_blank" href="https://t.me/Jimmy612">
            <img src="@/assets/telegram-color.svg" />
            <span>Telegram</span>
         </a>
      </div>
   </div>
</template>

<style lang="scss" scoped>
   .PageHome-header {
      width: 100%;
      transition: all 0.3s;

      display: grid;
      grid-template-areas:
         "img"
         "name"
         "labels"
         "socials";
      justify-content: center;
      align-items: center;
      gap: 0.5rem 2rem;
      place-items: center;

      .PageHome-image {
         --image-size: 12em;
         width: var(--image-size);
         height: var(--image-size);
         margin-bottom: 1em;

         overflow: hidden;
         border-radius: 50%;
         object-fit: contain;
         display: flex;
         box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
         transition: 0.3s;
      }
      .PageHome-name {
         font-weight: bold;
         font-size: 1.8em;
         text-align: center;
         line-height: 1em;
      }
      .PageHome-labels {
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: row;
         gap: 0.5em;
         & > * {
            display: inherit;
            flex-direction: inherit;
            align-items: inherit;
            gap: inherit;
         }

         .PageHome-labels-dot {
            display: flex;
            line-height: 1em;

            --size: 4px;
            --width: var(--size);
            --height: var(--size);

            width: var(--width);
            min-width: var(--width);
            max-width: var(--width);
            height: var(--height);
            min-height: var(--height);
            max-height: var(--height);

            background: hsl(0, 0%, 20%);
            border-radius: 50%;
            overflow: hidden;
         }
      }
      .PageHome-socials {
         gap: 0.1em 0.4em;
         margin-top: 2em;
         display: flex;
         flex-direction: row;
         flex-wrap: wrap;
         align-items: flex-start;
         justify-content: center;

         & > * {
            width: 8em;
            gap: 0.8em;
            padding: 0.6em 0.7em;
            font-size: 1em;
            border-radius: 0.8em;
            border: 1px solid hsla(0, 0%, 0%, 0.08);

            color: inherit;
            text-decoration: none;
            transition: 0.3s;
            background: hsla(0, 0%, 100%, 0.9);

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            &:hover {
               color: black;
               transform: translateY(-0.2em);
            }

            img {
               width: 1.4em;
               height: 1.4em;
            }
         }
      }
   }

   @media (min-width: 700px) {
      .PageHome-header {
         display: grid;
         grid-template-areas:
            "img name"
            "img labels"
            "img socials";
         justify-content: start;
         align-items: start;
         gap: 0.5rem 2rem;

         .PageHome-name {
            width: 100%;
            grid-row: 0;
            font-size: 3em;
            text-align: start;
            display: flex;

            place-self: end;
         }
         .PageHome-labels {
            width: 100%;
            grid-row: 0;
            place-self: start;
            justify-content: flex-start;
         }
         .PageHome-socials {
            grid-row: 1fr;
            margin-top: 2em;
            justify-content: flex-start;
         }
      }
   }
</style>
