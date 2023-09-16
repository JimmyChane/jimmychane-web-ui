<script setup>
  import AppNav from "./App-Nav.vue";

  const routes = [
    { path: "/", title: "Home" },
    // { path: "/art", title: "Art" },
  ];
</script>

<template>
  <div class="App-actionbar">
    <div class="App-actionbar-items">
      <AppNav
        v-for="route of routes"
        :key="route.path"
        :path="route.path"
        :title="route.title"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .App-actionbar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: sticky;
    top: 0;

    background-color: hsla(0, 0%, 100%, 0.5);
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.05);

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      --blur: 1rem;
      -webkit-backdrop-filter: blur(var(--blur));
      backdrop-filter: blur(var(--blur));
    }

    .App-actionbar-items {
      gap: 1.2rem;
      padding: 0.5rem;
      padding: 1rem;

      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      overflow-y: auto;
    }
  }
</style>
