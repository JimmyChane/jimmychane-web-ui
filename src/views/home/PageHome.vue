<script>
  import Header from "./PageHome-header.vue";
  import Section from "./PageHome-section.vue";
  import Group from "./PageHome-group.vue";
  import Labels from "./PageHome-group-labels.vue";
  import Label from "./PageHome-group-label.vue";
  import SectionBody from "./PageHome-section-body.vue";

  export default {
    components: { Header, Section, Group, Labels, Label, SectionBody },
  };
</script>

<template>
  <div class="PageHome">
    <Section :style="{ 'grid-area': 'intro' }">
      <Header />
    </Section>

    <Section :style="{ 'grid-area': 'programming' }">
      <SectionBody>
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
      </SectionBody>
    </Section>

    <Section :style="{ 'grid-area': 'hobbies' }">
      <SectionBody>
        <h2>Hobbies</h2>
        <ul>
          <Label>Draw</Label>
          <Label>Code</Label>
        </ul>
      </SectionBody>
    </Section>

    <Section :style="{ 'grid-area': 'personality' }">
      <SectionBody>
        <h2>Personality</h2>
        <ul>
          <Label>Quiet</Label>
        </ul>
      </SectionBody>
    </Section>
  </div>
</template>

<style lang="scss">
  .PageHome {
    --color: #3c5f64;
    --max-width: 60rem;

    max-width: 100%;
    font-size: 1rem;

    display: grid;
    grid-template-areas:
      "intro"
      "programming"
      "hobbies"
      "personality";
    gap: 0.5rem;
    padding: 0.5rem;
    padding-bottom: 1rem;

    @media (min-width: 700px) {
      gap: 1rem;
      padding: 2rem;
      grid-template-areas:
        "intro intro"
        "programming programming"
        "hobbies personality";
    }

    // every sections
    & > *:not(:first-child) {
      --background-color: hsla(0, 0%, 100%, 0.7);
    }

    .PageHome-groups {
      min-width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      gap: 2rem 3rem;
    }
    ul {
      display: flex;
      gap: 4px;
    }
  }
</style>
