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
    <Section class="PageHome-intro">
      <Header />
    </Section>

    <Section>
      <SectionBody>
        <h2>Programming</h2>

        <div class="PageHome-sections">
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

    <Section>
      <SectionBody>
        <h2>Hobbies</h2>
        <ul>
          <Label>Draw</Label>
          <Label>Code</Label>
        </ul>
      </SectionBody>
    </Section>

    <Section>
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    font-size: 1rem;

    --color: #4b6357;
    --max-width: 60rem;

    & > *:not(:first-child) {
      --background-color: hsla(0, 0%, 100%, 0.7);
    }

    .PageHome-sections {
      min-width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      gap: 2rem 3rem;
    }
  }
</style>
