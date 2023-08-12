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

  import FursonaHeader from "./PageFursona-header.vue";

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
      FursonaHeader,
    },
    data: () => ({ ImageFreshnet, ImageRory }),
  };
</script>

<template>
  <div class="PageHome">
    <div class="PageHome-grid">
      <div class="PageHome-intro" :style="{ 'grid-area': 'intro' }">
        <Card :style="{ 'grid-area': 'intro' }">
          <Header />
        </Card>

        <Card :style="{ 'grid-area': 'programming' }">
          <CardBody>
            <h2>Programming</h2>

            <div class="PageHome-groups">
              <Group title="Build a functional web interface">
                <Labels>
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
                <Labels>
                  <Label>Figma</Label>
                </Labels>
              </Group>

              <Group title="Serve website and API">
                <Labels>
                  <Label>RESTful API</Label>
                  <Label>JSON</Label>
                  <Label>Express.js</Label>
                  <Label>MongoDB</Label>
                </Labels>
              </Group>

              <Group title="IDE">
                <Labels>
                  <Label>Visual Studio Code</Label>
                  <Label>Android Studio</Label>
                  <Label>JetBrains IntelliJ</Label>
                </Labels>
              </Group>

              <Group title="Mobile App">
                <Labels>
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
            <Labels>
              <Label>Draw</Label>
              <Label>Code</Label>
            </Labels>
          </CardBody>
        </Card>

        <Card :style="{ 'grid-area': 'personality' }">
          <CardBody>
            <h2>Personality</h2>
            <Labels>
              <Label>Quiet</Label>
            </Labels>
          </CardBody>
        </Card>
      </div>

      <div class="PageHome-project" :style="{ 'grid-area': 'project' }">
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
            information about each product, including specifications, pricing,
            and availability. It features high-quality images and comprehensive
            descriptions. The goal is to attract and retain customers, driving
            sales and growth for Freshnet Enterprise in today's competitive
            marketplace.</p
          >

          <Labels class="PageHome-project-labels">
            <Label>Vue.js</Label>
            <Label>Express.js</Label>
            <Label>MongoDB</Label>
            <Label>HTML</Label>
            <Label>TypeScript</Label>
            <Label>JavaScript</Label>
            <Label>CSS</Label>
            <Label>SCSS</Label>
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
            allowing visitors to easily navigate and explore his unique
            character. It includes a gallery of high-quality artwork and
            detailed descriptions that capture the essence of his fursona. The
            site also provides a brief biography, highlighting his interests and
            background within the furry community. With seamless integration of
            social media links and a contact form, the website serves as a
            comprehensive platform for my friend to connect with fellow furries
            and share his passion for his fursona.</p
          >

          <Labels class="PageHome-project-labels">
            <Label>Svelte.js</Label>
            <Label>HTML</Label>
            <Label>TypeScript</Label>
            <Label>JavaScript</Label>
            <Label>CSS</Label>
            <Label>SCSS</Label>
          </Labels>
        </div>
      </div>

      <div class="PageHome-fursona" :style="{ 'grid-area': 'fursona' }">
        <h2 class="PageHome-fursona-title">Fursona</h2>
        <img
          class="PageFursona-header"
          src="@/assets/fursona-preview-v0.6.png"
        />

        <FursonaHeader
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

        <FursonaHeader
          class="PageFursona-title"
          title="Personality"
          subtitle="Shy yet Intriguing"
        />
        <p
          >Delve into Jimmy Fox's personality through character descriptions and
          storytelling. Portray his shyness as a key trait that adds depth to
          his character. Explore how his reserved nature influences his
          interactions with others and his approach to social situations.
          Showcase his quick wit, intelligence, and adaptability as underlying
          qualities that make him fascinating.</p
        >

        <FursonaHeader
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

        <FursonaHeader
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
    </div>
  </div>
</template>

<style lang="scss">
  .PageHome {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0.5rem;
    @media (min-width: 700px) {
      padding: 2rem;
    }
    @media (min-width: 1200px) {
      padding: 4rem;
    }
    padding-bottom: 16rem;

    .PageHome-grid {
      width: 100%;
      max-width: 2800px;
      gap: 10rem 2rem;

      display: grid;
      grid-template-areas:
        "intro"
        "project"
        "fursona";
      place-items: center;
      grid-template-columns: 1fr;
      @media (min-width: 2000px) {
        grid-template-areas:
          "intro fursona"
          "project fursona";
        grid-template-columns: repeat(2, 1fr);
        place-items: start;
      }

      & > * {
        width: 100%;
        max-width: 70rem;
      }

      .PageHome-intro {
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
      }
      .PageHome-project {
        background: var(--color-dark);

        color: white;

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
            color: var(--color-dark);
            background-color: white;
            font-weight: 600;
            font-size: 0.6em;
          }
        }
      }
      .PageHome-fursona {
        --color: #9ed5ce;

        background: var(--color);
        border-radius: 2rem;

        position: relative;

        --padding: 2rem;
        padding: var(--padding);
        padding-top: calc(var(--padding) + 2rem);
        @media (min-width: 800px) {
          --padding: 4rem;
        }

        display: flex;
        flex-direction: column;
        text-align: start;

        .PageHome-fursona-title {
          position: absolute;
          background: white;
          color: var(--color);
          padding: 0.5em;
          padding-left: 1em;
          width: 9em;
          text-align: start;

          border: 4px solid var(--color);
          border-radius: 1em;

          top: -1em;
          left: calc(var(--padding) - 4px);
        }
        .PageFursona-header {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: contain;
          margin: auto;
          border-radius: 2em;

          background: rgb(180, 231, 224);

          @media (min-width: 800px) {
            padding: 1rem;
          }
          @media (min-width: 1000px) {
            padding: 2rem;
          }
        }
        .PageFursona-title {
          margin-top: 4em;
          margin-bottom: 2em;
        }
      }
    }
  }
</style>
