<script setup>
  import Header from "./PageHome-header.vue";
  import Card from "./PageHome-card.vue";
  import CardBody from "./PageHome-card-body.vue";
  import Group from "./PageHome-group.vue";
  import Labels from "./PageHome-group-labels.vue";
  import Label from "./PageHome-group-label.vue";

  import Section from "./PageHome-section.vue";
  import SectionTitle from "./PageHome-section-title.vue";

  import ProjectHeader from "./PageHome-project-header.vue";
  import ProjectPreview from "./PageHome-project-preview.vue";
  import FursonaHeader from "./PageHome-fursona-header.vue";

  import ImageRory from "@/assets/showcase-rory-xavier.png";
  import ImageRhougous from "@/assets/showcase-rhougous-hiroki.png";
  import ImageFreshnet from "@/assets/showcase-freshnet-enterprise.png";
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

      <Section class="PageHome-project" :style="{ 'grid-area': 'project' }">
        <SectionTitle>Projects</SectionTitle>

        <div>
          <ProjectHeader
            title="Rory Xavier, Reference"
            subtitle="Personal Website"
            href="https://ref.rorywolf.net/"
          />

          <ProjectPreview
            href="https://ref.rorywolf.net/"
            :src="ImageRory"
            alt="Rory Xavier's Reference"
          />

          <p
            >The website features a clean and user-friendly design, allowing
            visitors to easily navigate and explore his unique character. It
            includes a gallery of high-quality artwork and detailed descriptions
            that capture the essence of his fursona. The site also provides a
            brief biography, highlighting his interests and background within
            the furry community. With seamless integration of social media links
            and a contact form, the website serves as a comprehensive platform
            for my friend to connect with fellow furries and share his passion
            for his fursona.</p
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

        <div>
          <ProjectHeader
            title="Rhougous Hiroki"
            subtitle="Personal Website"
            href="https://rhougous.pages.dev/"
          />

          <ProjectPreview
            href="https://rhougous.pages.dev/"
            :src="ImageRhougous"
            alt="Rhougous Hiroki's Website"
          />

          <Labels class="PageHome-project-labels">
            <Label>Vue.js</Label>
            <Label>HTML</Label>
            <Label>TypeScript</Label>
            <Label>JavaScript</Label>
            <Label>CSS</Label>
            <Label>SCSS</Label>
          </Labels>
        </div>

        <div>
          <ProjectHeader
            title="Freshnet Enterprise"
            subtitle="Commercial Website"
            href="https://www.freshnet.app"
          />

          <ProjectPreview
            href="https://www.freshnet.app"
            :src="ImageFreshnet"
            alt="Freshnet Enterprise"
          />

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
      </Section>

      <Section class="PageHome-fursona" :style="{ 'grid-area': 'fursona' }">
        <SectionTitle>Fursona</SectionTitle>
        <img
          class="PageHome-fursona-preview"
          src="@/assets/fursona-preview-v0.6.png"
          alt="Jimmy Yellow Fox"
        />

        <FursonaHeader
          class="PageHome-fursona-title"
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
          class="PageHome-fursona-title"
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
          class="PageHome-fursona-title"
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
          class="PageHome-fursona-title"
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
      </Section>
    </div>
  </div>
</template>

<style lang="scss">
  .PageHome {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 16rem;
    padding: 0.5rem;
    @media (min-width: 700px) {
      padding: 2rem;
    }
    @media (min-width: 1200px) {
      padding: 4rem;
    }

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
          "intro project"
          "fursona project";
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
          --background-color: var(--background-color-opacity70);
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
        --color: var(--color-dark);

        color: white;
        text-align: start;
        gap: 6rem 4rem;
        display: flex;
        flex-direction: column;

        @media (min-width: 1000px) {
          flex-direction: row;
          flex-wrap: wrap;

          & > * {
            flex: 1 14rem;
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
        --color: var(--section-fursona-background-color);

        display: flex;
        flex-direction: column;
        text-align: start;

        .PageHome-fursona-preview {
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
        .PageHome-fursona-title {
          margin-top: 4em;
          margin-bottom: 2em;
        }
      }
    }
  }
</style>
