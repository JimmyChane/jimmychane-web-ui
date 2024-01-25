<script setup lang="ts">
  import Page from '@/components/Page.vue';

  import Section from '@/components/section/Section.vue';

  import ProjectHeader from '@/pages/project/PageHome-project-header.vue';
  import ProjectPreview from '@/pages/project/PageHome-project-preview.vue';

  import ImageRory from '@/assets/showcase/showcase-rory-xavier.webp';
  import ImageRhougous from '@/assets/showcase/showcase-rhougous-hiroki.webp';
  import ImageFreshnet from '@/assets/showcase/showcase-freshnet-enterprise.webp';

  import Labels from '@/pages/project/PageHome-group-labels.vue';
  import Label from '@/pages/project/PageHome-group-label.vue';

  import CardBody from '@/pages/project/PageHome-card-body.vue';
  import Group from '@/pages/project/PageHome-group.vue';
  import Card from '@/pages/home/PageHome-card.vue';
</script>

<template>
  <Page>
    <div class="PageProject">
      <div class="PageProject-skill">
        <Card style="grid-area: programming">
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

        <Card style="grid-area: hobby">
          <CardBody>
            <h2>Hobbies</h2>
            <Labels>
              <Label>Draw</Label>
              <Label>Code</Label>
            </Labels>
          </CardBody>
        </Card>

        <Card style="grid-area: personality">
          <CardBody>
            <h2>Personality</h2>
            <Labels>
              <Label>Quiet</Label>
            </Labels>
          </CardBody>
        </Card>
      </div>

      <Section class="PageProject-project">
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

          <p>
            The website features a clean and user-friendly design, allowing visitors to easily
            navigate and explore his unique character. It includes a gallery of high-quality artwork
            and detailed descriptions that capture the essence of his fursona. The site also
            provides a brief biography, highlighting his interests and background within the furry
            community. With seamless integration of social media links and a contact form, the
            website serves as a comprehensive platform for my friend to connect with fellow furries
            and share his passion for his fursona.
          </p>

          <Labels class="PageProject-project-labels">
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
            href="https://www.rhougous.net/"
          />

          <ProjectPreview
            href="https://www.rhougous.net/"
            :src="ImageRhougous"
            alt="Rhougous Hiroki's Website"
          />

          <Labels class="PageProject-project-labels">
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

          <p>
            I'm developing a website for Freshnet Enterprise, a computer store that offers a wide
            range of products. The website showcases detailed information about each product,
            including specifications, pricing, and availability. It features high-quality images and
            comprehensive descriptions. The goal is to attract and retain customers, driving sales
            and growth for Freshnet Enterprise in today's competitive marketplace.
          </p>

          <Labels class="PageProject-project-labels">
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
    </div>
  </Page>
</template>

<style scoped lang="scss">
  .PageProject {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
  .PageProject-skill {
    width: 100%;
    font-size: 1rem;

    display: grid;
    grid-template-areas:
      'programming'
      'hobby'
      'personality';
    gap: 0.5rem;

    @media (min-width: 700px) {
      gap: 1rem;
      grid-template-areas:
        'programming programming'
        'hobby personality';
    }

    & > * {
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
  .PageProject-project {
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

    .PageProject-project-labels {
      & > * {
        color: var(--color-dark);
        background-color: white;
        font-weight: 600;
        font-size: 0.6em;
      }
    }
  }
</style>
