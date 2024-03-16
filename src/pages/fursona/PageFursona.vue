<script setup lang="ts">
  import Page from '@/components/Page.vue';

  import Section from '@/components/section/Section.vue';

  import FursonaHeader from './components/PageFursona-fursona-header.vue';
</script>

<template>
  <Page>
    <Section class="PageFursona" style="--text-color: var(--section-fursona-text-color)">
      <img
        class="PageFursona-fursona-preview"
        src="@/assets/fursona/fursona-preview-v0.6.webp"
        alt="Jimmy Yellow Fox"
        loading="lazy"
      />

      <FursonaHeader
        class="PageFursona-fursona-title"
        title="Artwork and Character Design"
        subtitle="Captivating Appearance"
      />
      <p>
        Create artwork and character designs that showcase Jimmy Fox's captivating appearance.
        Highlight his striking yellow fur, blue hair, and half-blackened ears with vibrant colors
        and attention to detail. Capture the intrigue and complexity of his physical features in
        visually stunning illustrations.
      </p>

      <FursonaHeader
        class="PageFursona-fursona-title"
        title="Personality"
        subtitle="Shy yet Intriguing"
      />
      <p>
        Delve into Jimmy Fox's personality through character descriptions and storytelling. Portray
        his shyness as a key trait that adds depth to his character. Explore how his reserved nature
        influences his interactions with others and his approach to social situations. Showcase his
        quick wit, intelligence, and adaptability as underlying qualities that make him fascinating.
      </p>

      <FursonaHeader
        class="PageFursona-fursona-title"
        title="Stylish Simplicity"
        subtitle="Fashionable Outfit"
      />
      <p>
        Highlight Jimmy Fox's sense of style with his simple yet fashionable outfit. Describe his
        choice of a white t-shirt and gray pants, emphasizing how it reflects his personality. Focus
        on the clean and crisp look of the white t-shirt that enhances his vibrant yellow fur, and
        the touch of sophistication and balance brought by the gray pants.
      </p>

      <FursonaHeader
        class="PageFursona-fursona-title"
        title="Hobbies and Interests"
        subtitle="Drawing and Programming"
      />
      <p>
        Discover Jimmy Fox's diverse range of hobbies and interests as he passionately engages in
        drawing and programming. With a love for art, Jimmy immerses himself in sketching and
        creating intricate illustrations, while his aptitude for programming allows him to navigate
        the digital realm with skill and creativity. Whether expressing his imagination on paper or
        solving complex coding puzzles, Jimmy's versatile pursuits showcase his unwavering
        dedication and passion for both artistic expression and technical innovation.
      </p>
    </Section>
  </Page>
</template>

<style scoped lang="scss">
  .PageFursona {
    --color: var(--section-fursona-background-color);
    color: white;

    display: flex;
    flex-direction: column;
    text-align: start;

    .PageFursona-fursona-preview {
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: contain;
      margin: auto;
      border-radius: 2em;

      background: var(--section-fursona-header-background-color);

      @media (min-width: 800px) {
        padding: 1rem;
      }
      @media (min-width: 1000px) {
        padding: 2rem;
      }
    }
    .PageFursona-fursona-title {
      margin-top: 4em;
      margin-bottom: 2em;
    }
  }
</style>
