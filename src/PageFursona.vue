<script>
   import Header from "./PageCode-header.vue";
   export default { components: { Header } };
</script>

<template>
   <div class="PageFursona">
      <img class="PageFursona-header" src="@/assets/20220822_2138-green.png" />

      <Header
         class="PageFursona-title"
         title="Artwork and Character Design"
         subtitle="Captivating Appearance"
      />
      <p
         >Create artwork and character designs that showcase Jimmy Fox's
         captivating appearance. Highlight his striking yellow fur, blue hair,
         and half-blackened ears with vibrant colors and attention to detail.
         Capture the intrigue and complexity of his physical features in
         visually stunning illustrations.</p
      >

      <Header
         class="PageFursona-title"
         title="Personality"
         subtitle="Shy yet Intriguing"
      />
      <p
         >Delve into Jimmy Fox's personality through character descriptions and
         storytelling. Portray his shyness as a key trait that adds depth to his
         character. Explore how his reserved nature influences his interactions
         with others and his approach to social situations. Showcase his quick
         wit, intelligence, and adaptability as underlying qualities that make
         him fascinating.</p
      >

      <Header
         class="PageFursona-title"
         title="Stylish Simplicity"
         subtitle="Fashionable Outfit"
      />
      <p
         >Highlight Jimmy Fox's sense of style with his simple yet fashionable
         outfit. Describe his choice of a white t-shirt and gray pants,
         emphasizing how it reflects his personality. Focus on the clean and
         crisp look of the white t-shirt that enhances his vibrant yellow fur,
         and the touch of sophistication and balance brought by the gray
         pants.</p
      >

      <Header
         class="PageFursona-title"
         title="Hobbies and Interests"
         subtitle="Drawing and Programming"
      />
      <p
         >Discover Jimmy Fox's diverse range of hobbies and interests as he
         passionately engages in drawing and programming. With a love for art,
         Jimmy immerses himself in sketching and creating intricate
         illustrations, while his aptitude for programming allows him to
         navigate the digital realm with skill and creativity. Whether
         expressing his imagination on paper or solving complex coding puzzles,
         Jimmy's versatile pursuits showcase his unwavering dedication and
         passion for both artistic expression and technical innovation.</p
      >
   </div>
</template>

<style lang="scss" scoped>
   .PageFursona {
      max-width: 35rem;
      display: flex;
      flex-direction: column;
      text-align: start;
      padding: 2em;
      padding-bottom: 7em;

      .PageFursona-header {
         width: 100%;
         margin: auto;
         border-radius: 3.5em;
         box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      }
      .PageFursona-title {
         margin-top: 4em;
         margin-bottom: 2em;
      }
   }
</style>
