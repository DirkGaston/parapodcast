<template>
  <q-page class="homePage" style="min-height: 480px">
    <header>
      <img
        style="max-width: 100%"
        src="../assets/finalbanner.png"
        alt="parapodcast"
        class="headerImg"
      />
      <img class="ufo" src="../assets/ufo.gif" alt="ufo" />
      <div class="divider">
        <p class="text-white text-h6 q-pa-sm flex flex-center">
          Podcast de investigación de hechos paranormales presentado por Roberto
          Zombrano y Elvira Siller
        </p>
      </div>
    </header>

    <div class="row justify-center flex">
      <q-card class="my-card q-px-xl col-12 col-md-6 card q-mr-md">
        <EpisodeList />
        <APINasaSection />
      </q-card>
      <q-card class="my-card q-pa-md col-11 col-md-3 card_Aside">
        <HomeAside />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import EpisodeList from "../components/EpisodeList.vue";
import HomeAside from "../components/HomeAside.vue";
import APINasaSection from "../components/APINasaSection.vue";
import { Timeline } from "vue-tweet-embed";

export default {
  name: "Home",

  components: {
    EpisodeList,
    Timeline,
    HomeAside,
    APINasaSection,
  },
};
</script>

<style></style>
