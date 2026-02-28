<script setup lang="ts">
import { PROFILE_JIMMYCHANE } from '@/config/jimmychane.profile.meta';
import { FAVOURITE_ROUTE, FURSONA_ROUTE, PROJECT_ROUTE } from '@/stores/navigation.store';

import AppPage from '@/layout/navigation/components/page/AppPage.vue';

import HomeLabel from './components/Home-Label.vue';
import HomePfp from './components/Home-Pfp.vue';
import HomeSectionTitle from './components/Home-SectionTitle.vue';
import HomeSocial from './components/Home-Social.vue';
import HomeRouteButton from './components/HomeRouteButton.vue';
</script>

<template>
  <AppPage>
    <div class="home-page">
      <div class="home-intro">
        <HomePfp />
        <h1 class="home-title">{{ PROFILE_JIMMYCHANE.name }}</h1>
        <div class="home-labels">
          <HomeLabel
            v-for="(label, index) in PROFILE_JIMMYCHANE.labels"
            :model="label"
            :index="index"
            :length="PROFILE_JIMMYCHANE.labels.length"
          />
        </div>
      </div>

      <div class="home-section-social">
        <HomeSectionTitle>Connect with me</HomeSectionTitle>
        <div class="home-socials">
          <HomeSocial v-for="social of PROFILE_JIMMYCHANE.socials" :key="social.socialPlatform.title" :item="social" />
        </div>
      </div>

      <div class="home-section-social">
        <HomeSectionTitle>Quick Navigation</HomeSectionTitle>
        <div class="home-page-routes">
          <HomeRouteButton :route="FURSONA_ROUTE" type="fursona">
            <template #description>My character design</template>
          </HomeRouteButton>
          <HomeRouteButton :route="PROJECT_ROUTE" type="project">
            <template #description>Latest work</template>
          </HomeRouteButton>
          <HomeRouteButton :route="FAVOURITE_ROUTE" type="favorite">
            <template #description>Things I love</template>
          </HomeRouteButton>
        </div>
      </div>
    </div>
  </AppPage>
</template>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  gap: 5rem;
  padding-bottom: 10rem;

  display: flex;
  flex-direction: column;

  .home-intro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .home-title {
      line-height: 1.5em;
      font-weight: 600;
      font-size: 2rem;
      text-align: start;
    }
    .home-labels {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .home-page-description {
      font-size: 1.2rem;
      text-wrap: balance;
    }
  }
  .home-section-social {
    gap: 1.2rem;
    display: flex;
    flex-direction: column;
    .home-socials {
      gap: 0.5em;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      flex-wrap: wrap;
    }
  }
  .home-page-routes {
    width: 100%;

    gap: 0.5rem;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
