<script setup lang="ts">
import ImageFreshnet from '@/assets/showcase/showcase-freshnet-enterprise.webp';
import ImageGryfder from '@/assets/showcase/showcase-gryfder-deficere.webp';
import ImageRhougous from '@/assets/showcase/showcase-rhougous-hiroki.webp';
import ImageRory from '@/assets/showcase/showcase-rory-xavier.webp';

import AppPage from '@/layout/navigation/components/page/AppPage.vue';

import Label from './components/PageProject-group-label.vue';
import Labels from './components/PageProject-group-labels.vue';
import ProjectHeader from './components/PageProject-project-header.vue';
import ProjectPreview from './components/PageProject-project-preview.vue';
import Section from './components/PageProject-project-section.vue';
</script>

<template>
  <AppPage>
    <div class="project-page">
      <Section>
        <ProjectHeader
          title="Rory Xavier, Reference"
          subtitle="Contributations"
          href="https://ref.rorywolf.net/"
        />

        <ProjectPreview
          href="https://ref.rorywolf.net/"
          :src="ImageRory"
          alt="Rory Xavier's Reference"
        />

        <p>
          I'm helping develop a user-friendly website with smooth profile picture header animations,
          a biography, and seamless integration of social media and contact options.
        </p>

        <Labels class="project-page-project-labels">
          <Label>Svelte.js</Label>
          <Label>HTML</Label>
          <Label>TypeScript</Label>
          <Label>JavaScript</Label>
          <Label>CSS</Label>
          <Label>SCSS</Label>
        </Labels>
      </Section>

      <Section>
        <ProjectHeader
          title="Gryfder Deficere"
          subtitle="Setup Github"
          href="https://gryfder.github.io/"
        />

        <ProjectPreview
          href="https://gryfder.github.io/"
          :src="ImageGryfder"
          alt="Gryfder Deficere's Website"
        />

        <Labels class="project-page-project-labels">
          <Label>Vue.js</Label>
          <Label>HTML</Label>
          <Label>TypeScript</Label>
          <Label>JavaScript</Label>
          <Label>CSS</Label>
          <Label>SCSS</Label>
        </Labels>
      </Section>

      <Section>
        <ProjectHeader
          title="Rhougous Hiroki"
          subtitle="Helps from the start"
          href="https://www.rhougous.net/"
        />

        <ProjectPreview
          href="https://www.rhougous.net/"
          :src="ImageRhougous"
          alt="Rhougous Hiroki's Website"
        />

        <p>
          I built a website from scratch to help my friend create a visually appealing online
          presence for his fursona. The site features a well-designed layout, intuitive background
          use, and smooth transitions between pages for an enhanced user experience.
        </p>

        <Labels class="project-page-project-labels">
          <Label>Vue.js</Label>
          <Label>HTML</Label>
          <Label>TypeScript</Label>
          <Label>JavaScript</Label>
          <Label>CSS</Label>
          <Label>SCSS</Label>
        </Labels>
      </Section>

      <Section>
        <ProjectHeader
          title="Freshnet Enterprise"
          subtitle="Computer store's website"
          href="https://www.freshnet.app"
        />

        <ProjectPreview
          href="https://www.freshnet.app"
          :src="ImageFreshnet"
          alt="Freshnet Enterprise"
        />

        <p>
          I built a website for Freshnet Enterprise, a computer store, to enhance its online
          presence. The website provides detailed information about the company's contacts, business
          hours, services, and location. With a user-friendly layout, it focuses on retaining
          customers and driving growth for Freshnet Enterprise in today's competitive marketplace.
        </p>

        <Labels class="project-page-project-labels">
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
      </Section>
    </div>
  </AppPage>
</template>

<style scoped lang="scss">
.project-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & > * {
    --background-color: var(--color-dark);

    color: white;
    text-align: start;
    gap: 6rem 4rem;
    display: flex;
    flex-direction: column;

    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 0.5rem;

    p {
      margin: 1rem 0;
    }

    .project-page-project-labels {
      & > * {
        color: var(--color-dark);
        background-color: white;
        font-weight: 600;
        font-size: 0.6em;
      }
    }
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;

    & > * {
      flex: 1 14rem;
      --padding: 4rem;
    }
  }
}
</style>
