<template>
  <div class="PFP">
    <div class="PFP-background"></div>
    <img
      class="PFP-image"
      src="@/assets/jimmy_fox_pfp-v1.png"
      alt="Jimmy Chane's Profile Image"
    />
  </div>
</template>

<style lang="scss" scoped>
  .PFP {
    width: 100%;
    height: 100%;

    max-width: 12em;
    max-height: 15em;

    aspect-ratio: 12/15;

    position: relative;

    margin-bottom: 1em;
    transition: 0.3s;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    overflow: hidden;
    border-bottom-left-radius: 45%;
    border-bottom-right-radius: 45%;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    .PFP-background {
      background: #ffffff;
      position: absolute;
      bottom: 0;
      left: 0;

      width: 100%;
      aspect-ratio: 1/1;

      z-index: 1;

      border-radius: 50%;
    }

    .PFP-image {
      z-index: 2;
      width: 120%;
      min-height: 100%;
      object-fit: cover;
    }
  }
</style>
