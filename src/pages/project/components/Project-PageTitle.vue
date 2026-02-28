<script setup lang="ts"></script>

<template>
  <div class="project-page-title">
    <h1>Developer Showcase</h1>
    <p>Quick insights into technical stack and project impact</p>
  </div>
</template>

<style scoped lang="scss">
.light {
  .project-page-title {
    color: #1e293b;
  }
}
.dark {
  .project-page-title {
    color: var(--text-color);
    opacity: 0.8;
  }
}
.project-page-title {
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  text-align: start;

  color: #1e293b;
}
</style>
