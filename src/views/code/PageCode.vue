<script>
  import Header from "./PageCode-header.vue";
  export default {
    components: { Header },
  };
</script>

<template>
  <div class="PageCode">
    <a
      class="PageCode-preview-a"
      href="https://www.freshnet.app"
      target="_blank"
    >
      <img
        class="PageCode-preview"
        src="@/assets/showcase-freshnet-enterprise.png"
      />
    </a>
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
      and growth for Freshnet Enterprise in today's competitive marketplace.</p
    >

    <a
      class="PageCode-preview-a"
      href="https://ref.rorywolf.net/"
      target="_blank"
    >
      <img class="PageCode-preview" src="@/assets/showcase-rory-xavier.png" />
    </a>
    <Header
      title="Rory Xavier"
      subtitle="Personal Website"
      href="https://ref.rorywolf.net/"
    />
    <p
      >I built my boyfriend's personal website to showcase his fursona
      reference. The website features a clean and user-friendly design, allowing
      visitors to easily navigate and explore his unique character. It includes
      a gallery of high-quality artwork and detailed descriptions that capture
      the essence of his fursona. The site also provides a brief biography,
      highlighting his interests and background within the furry community. With
      seamless integration of social media links and a contact form, the website
      serves as a comprehensive platform for my friend to connect with fellow
      furries and share his passion for his fursona.</p
    >

    <Header title="Knowledge Gained" />
    <ul class="PageCode-knowledges">
      <li>Build using Vue.js</li>
      <li>Build using Svelte</li>
      <li>Build using TypeScript</li>
      <li>Serve PWA web application</li>
      <li>Manage Domains & SSL</li>
      <li>Deploy Frontend Server using Express.js & Caddy</li>
      <li>Deploy & Manage Backend Server in Express.js</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .PageCode {
    max-width: 35rem;
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 2em;
    padding-bottom: 7em;
    gap: 2rem;

    .PageCode-preview-a {
      margin: auto;
      border-radius: 1em;
      .PageCode-preview {
        width: 100%;
        max-width: 20rem;
        margin: auto;
        border-radius: 1em;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
      }
    }
    p {
      margin-bottom: 2rem;
    }
    .PageCode-knowledges {
      gap: 0.3em;
      margin: 0;
      padding-left: 1.5em;
      display: flex;
      flex-direction: column;
    }
  }
</style>
