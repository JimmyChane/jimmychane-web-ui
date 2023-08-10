<script>
  import Header from "./PageCode-header.vue";
  import Labels from "./PageCode-labels.vue";
  import Label from "./PageCode-label.vue";
  export default {
    components: { Header, Labels, Label },
  };
</script>

<template>
  <div class="PageCode">
    <div>
      <a
        class="PageCode-preview"
        href="https://www.freshnet.app"
        target="_blank"
      >
        <img
          class="PageCode-preview"
          src="@/assets/showcase-freshnet-enterprise.png"
        />
      </a>

      <Labels>
        <Label>Vue.js</Label>
        <Label>Express.js</Label>
        <Label>MongoDB</Label>
        <Label>TypeScript</Label>
        <Label>JavaScript</Label>
        <Label>SSL</Label>
        <Label>PWA</Label>
      </Labels>

      <Header
        title="Freshnet Enterprise"
        subtitle="Commercial Website"
        href="https://www.freshnet.app"
      />
      <p
        >I'm developing a website for Freshnet Enterprise, a computer store that
        offers a wide range of products. The website showcases detailed
        information about each product, including specifications, pricing, and
        availability. It features high-quality images and comprehensive
        descriptions. The goal is to attract and retain customers, driving sales
        and growth for Freshnet Enterprise in today's competitive
        marketplace.</p
      >
    </div>

    <div>
      <a
        class="PageCode-preview"
        href="https://ref.rorywolf.net/"
        target="_blank"
      >
        <img class="PageCode-preview" src="@/assets/showcase-rory-xavier.png" />
      </a>
      <Labels>
        <Label>Svelte.js</Label>
      </Labels>
      <Header
        title="Rory Xavier, Reference"
        subtitle="Personal Website"
        href="https://ref.rorywolf.net/"
      />
      <p
        >I built my boyfriend's personal website to showcase his fursona
        reference. The website features a clean and user-friendly design,
        allowing visitors to easily navigate and explore his unique character.
        It includes a gallery of high-quality artwork and detailed descriptions
        that capture the essence of his fursona. The site also provides a brief
        biography, highlighting his interests and background within the furry
        community. With seamless integration of social media links and a contact
        form, the website serves as a comprehensive platform for my friend to
        connect with fellow furries and share his passion for his fursona.</p
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .PageCode {
    --color: #3c5f64;

    max-width: 40rem;
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 2em;
    padding-bottom: 7em;
    gap: 4rem;

    & > * {
      display: flex;
      flex-direction: column;
      text-align: start;
      gap: 0.5rem;

      a.PageCode-preview {
        border-radius: 1em;
        width: 20rem;
        max-width: 20rem;
        img.PageCode-preview {
          width: 100%;
          width: inherit;
          max-width: inherit;
          margin: auto;
          border-radius: 1em;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
        }
      }
      p {
        margin-top: 1rem;
        margin-bottom: 2rem;
      }
    }
  }
</style>
