<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';

import { LayoutId, findAppRouteById } from '@/stores/navigation.store';

const FullLayout = defineAsyncComponent(() => import('@/layout/full/Full.layout.vue'));
const NavigationLayout = defineAsyncComponent(
  () => import('@/layout/navigation/Navigation.layout.vue'),
);

const route = useRoute();
const appRoute = computed(() => findAppRouteById(route.name?.toString()));
const layoutId = computed(() => appRoute.value?.layoutId ?? LayoutId.NAVIGATION);
</script>

<template>
  <FullLayout v-if="layoutId === LayoutId.FULL" />
  <NavigationLayout v-if="layoutId === LayoutId.NAVIGATION" />
</template>
