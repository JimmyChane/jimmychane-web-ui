<script setup lang="ts">
  import Page from '@/components/AppPage.vue';

  import Section from './components/PageProject-project-section.vue';

  import ProjectHeader from './components/PageProject-project-header.vue';
  import ProjectPreview from './components/PageProject-project-preview.vue';

  import ImageRory from '@/assets/showcase/showcase-rory-xavier.webp';
  import ImageRhougous from '@/assets/showcase/showcase-rhougous-hiroki.webp';
  import ImageFreshnet from '@/assets/showcase/showcase-freshnet-enterprise.webp';

  import Labels from './components/PageProject-group-labels.vue';
  import Label from './components/PageProject-group-label.vue';

  import CardBody from './components/PageProject-card-body.vue';
  import Group from './components/PageProject-group.vue';
  import Card from './components/PageProject-card.vue';

  import { JimmyChane } from '@/data/Profile';
  import { computed } from 'vue';

  const skill = computed(() => JimmyChane.skill);
  const personalities = computed(() => JimmyChane.personalities);
  const hobbies = computed(() => JimmyChane.hobbies);
</script>

<template>
  <Page>
    <div class="PageProject">
      <div class="PageProject-skill">
        <Card style="grid-area: programming">
          <CardBody>
            <h2>{{ skill.title }}</h2>

            <div class="PageHome-groups">
              <Group v-for="category of skill.categories" :title="category.title">
                <Labels>
                  <Label v-for="skill of category.skills">{{ skill }}</Label>
                </Labels>
              </Group>
            </div>
          </CardBody>
        </Card>

        <Card style="grid-area: hobby">
          <CardBody>
            <h2>Hobbies</h2>
            <Labels>
              <Label v-for="hobby of hobbies">{{ hobby }}</Label>
            </Labels>
          </CardBody>
        </Card>

        <Card style="grid-area: personality">
          <CardBody>
            <h2>Personality</h2>
            <Labels>
              <Label v-for="personality of personalities">{{ personality }}</Label>
            </Labels>
          </CardBody>
        </Card>
      </div>

      <Section class="PageProject-project">
        <div class="PageProject-project-sub-section">
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

        <div class="PageProject-project-sub-section">
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

        <div class="PageProject-project-sub-section">
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
    gap: 1rem;
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
      --background-color: var(--background-color-opacity60);
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
    --section-color: var(--color-dark);

    color: white;
    text-align: start;
    gap: 6rem 4rem;
    display: flex;
    flex-direction: column;

    @media (min-width: 1000px) {
      flex-direction: row;
      flex-wrap: wrap;

      .PageProject-project-sub-section {
        flex: 1 14rem;
      }
    }

    .PageProject-project-sub-section {
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
