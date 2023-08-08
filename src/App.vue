<script>
  import Actionbar from "./App-Actionbar.vue";
  import Footer from "./App-Footer.vue";

  export default {
    components: { Actionbar, Footer },
    data: (c) => ({}),
  };
</script>

<template>
  <div class="App">
    <Actionbar style="z-index: 2" />

    <div class="App-body" style="z-index: 1">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<style lang="scss">
  .App {
    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;400;600;900&display=swap");

    font-family: "Inter", "Roboto", sans-serif;
    font-family: "Inter", sans-serif;
    font-family: sans-serif;
    font-family: "Inter";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;

    background: linear-gradient(140.09deg, #e0f7f2 10.49%, #f7f3f3 90.41%);

    width: 100%;
    min-height: 100dvh;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;

    .App-body {
      width: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  }

  :root {
    @media (min-width: 600px) {
      font-size: 1.2rem;
    }
  }

  h1,
  h2,
  h3 {
    margin: 0;
    font-weight: 600;
  }
</style>
