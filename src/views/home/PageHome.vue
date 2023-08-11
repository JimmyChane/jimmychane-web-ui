<script>
  import Header from "./PageHome-header.vue";
  import Card from "./PageHome-card.vue";
  import CardBody from "./PageHome-card-body.vue";
  import Group from "./PageHome-group.vue";
  import Labels from "./PageHome-group-labels.vue";
  import Label from "./PageHome-group-label.vue";

  import CodeHeader from "./PageCode-header.vue";
  import Preview from "./PageCode-preview.vue";

  import ImageFreshnet from "@/assets/showcase-freshnet-enterprise.png";
  import ImageRory from "@/assets/showcase-rory-xavier.png";

  export default {
    components: {
      Header,
      Card,
      Group,
      Labels,
      Label,
      CardBody,
      CodeHeader,
      Preview,
    },
    data: () => ({ ImageFreshnet, ImageRory }),
  };
</script>

<template>
  <div class="PageHome">
    <div class="PageHome-intro">
      <Card :style="{ 'grid-area': 'intro' }">
        <Header />
      </Card>

      <Card :style="{ 'grid-area': 'programming' }">
        <CardBody>
          <h2>Programming</h2>

          <div class="PageHome-groups">
            <Group title="Build a functional web interface">
              <Labels class="PageHome-intro-labels">
                <Label>Vue.js</Label>
                <Label>HTML</Label>
                <Label>JavaScript</Label>
                <Label>TypeScript</Label>
                <Label>CSS</Label>
                <Label>SCSS</Label>
                <Label>Svelte</Label>
                <Label>Node.js</Label>
              </Labels>
            </Group>

            <Group title="UI Tool">
              <Labels class="PageHome-intro-labels">
                <Label>Figma</Label>
              </Labels>
            </Group>

            <Group title="Serve website and API">
              <Labels class="PageHome-intro-labels">
                <Label>RESTful API</Label>
                <Label>JSON</Label>
                <Label>Express.js</Label>
                <Label>MongoDB</Label>
              </Labels>
            </Group>

            <Group title="IDE">
              <Labels class="PageHome-intro-labels">
                <Label>Visual Studio Code</Label>
                <Label>Android Studio</Label>
                <Label>JetBrains IntelliJ</Label>
              </Labels>
            </Group>

            <Group title="Mobile App">
              <Labels class="PageHome-intro-labels">
                <Label>Android</Label>
                <Label>Java</Label>
                <Label>Flutter</Label>
                <Label>Dart</Label>
              </Labels>
            </Group>
          </div>
        </CardBody>
      </Card>

      <Card :style="{ 'grid-area': 'hobby' }">
        <CardBody>
          <h2>Hobbies</h2>
          <Labels class="PageHome-intro-labels">
            <Label>Draw</Label>
            <Label>Code</Label>
          </Labels>
        </CardBody>
      </Card>

      <Card :style="{ 'grid-area': 'personality' }">
        <CardBody>
          <h2>Personality</h2>
          <Labels class="PageHome-intro-labels">
            <Label>Quiet</Label>
          </Labels>
        </CardBody>
      </Card>
    </div>

    <div class="PageHome-project">
      <h2 class="PageHome-project-title">Projects</h2>

      <div>
        <CodeHeader
          title="Freshnet Enterprise"
          subtitle="Commercial Website"
          href="https://www.freshnet.app"
        />

        <Preview href="https://www.freshnet.app" :src="ImageFreshnet" />

        <p
          >I'm developing a website for Freshnet Enterprise, a computer store
          that offers a wide range of products. The website showcases detailed
          information about each product, including specifications, pricing, and
          availability. It features high-quality images and comprehensive
          descriptions. The goal is to attract and retain customers, driving
          sales and growth for Freshnet Enterprise in today's competitive
          marketplace.</p
        >
        <Labels class="PageHome-project-labels">
          <Label>Vue.js</Label>
          <Label>Express.js</Label>
          <Label>MongoDB</Label>
          <Label>TypeScript</Label>
          <Label>JavaScript</Label>
          <Label>SSL</Label>
          <Label>PWA</Label>
        </Labels>
      </div>

      <div>
        <CodeHeader
          title="Rory Xavier, Reference"
          subtitle="Personal Website"
          href="https://ref.rorywolf.net/"
        />

        <Preview href="https://ref.rorywolf.net/" :src="ImageRory" />

        <p
          >I built my boyfriend's personal website to showcase his fursona
          reference. The website features a clean and user-friendly design,
          allowing visitors to easily navigate and explore his unique character.
          It includes a gallery of high-quality artwork and detailed
          descriptions that capture the essence of his fursona. The site also
          provides a brief biography, highlighting his interests and background
          within the furry community. With seamless integration of social media
          links and a contact form, the website serves as a comprehensive
          platform for my friend to connect with fellow furries and share his
          passion for his fursona.</p
        >

        <Labels class="PageHome-project-labels">
          <Label>Svelte.js</Label>
        </Labels>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .PageHome {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10rem;
    align-items: center;

    padding: 0.5rem;
    @media (min-width: 700px) {
      padding: 2rem;
    }
    @media (min-width: 1200px) {
      padding: 4rem;
    }
    padding-bottom: 16rem;

    & > * {
      width: 100%;
      max-width: 70rem;
    }

    .PageHome-intro {
      max-width: 100%;
      font-size: 1rem;

      display: grid;
      grid-template-areas:
        "intro"
        "programming"
        "hobby"
        "personality";
      gap: 0.5rem;

      @media (min-width: 700px) {
        gap: 1rem;
        grid-template-areas:
          "intro intro"
          "programming programming"
          "hobby personality";
      }

      // every sections
      & > *:not(:first-child) {
        --background-color: hsla(0, 0%, 100%, 0.7);
      }

      .PageHome-groups {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        gap: 2rem 4rem;

        @media (max-width: 400px) {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;

          & > * {
            flex: 1 20rem;
          }
        }
      }

      .PageHome-intro-labels {
        & > * {
          background: var(--color);
        }
      }
    }
    .PageHome-project {
      background: var(--color-dark);

      color: white;

      min-width: 100%;
      text-align: start;
      gap: 6rem 4rem;
      border-radius: 2rem;

      --padding: 2rem;
      padding: var(--padding);
      padding-top: calc(var(--padding) + 2rem);

      display: flex;
      flex-direction: column;

      position: relative;

      @media (min-width: 800px) {
        --padding: 4rem;
      }
      @media (min-width: 1300px) {
        flex-direction: row;

        & > * {
          flex: 1;
        }
      }

      & > * {
        display: flex;
        flex-direction: column;
        text-align: start;
        gap: 0.5rem;

        p {
          margin: 1rem 0;
        }
      }

      .PageHome-project-title {
        position: absolute;
        background: white;
        color: var(--color-dark);
        padding: 0.5em;
        padding-left: 1em;
        width: 9em;
        text-align: start;

        border: 4px solid var(--color-dark);
        border-radius: 1em;

        top: -1em;
        left: calc(var(--padding) - 4px);
      }
      .PageHome-project-labels {
        & > * {
          color: var(--color);
          background-color: white;
          font-weight: 600;
          font-size: 0.6em;
        }
      }
    }
  }
</style>
