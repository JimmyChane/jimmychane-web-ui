<script setup>
  import { computed } from "vue";
  import { useRouter } from "vue-router";

  const props = defineProps({
    path: { type: String, default: "" },
    title: { type: String, default: "" },
  });

  const router = useRouter();

  const isSelected = computed(() => router.path === props.path);
</script>

<template>
  <router-link class="App-Nav" :isSelected="isSelected" :to="path">{{
    title
  }}</router-link>
</template>

<style lang="scss" scoped>
  .App-Nav {
    padding: 0.8em 1em;
    border-radius: 1em;
    line-height: 1em;

    font-size: 1rem;
    font-weight: 600;
    color: #101718;
    color: var(--text-color);
    text-decoration: none;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .App-Nav[isSelected="true"] {
    background: var(--color-dark);
    color: white;
  }
</style>
