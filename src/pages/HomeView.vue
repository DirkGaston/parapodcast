<template>
  <q-page class="homePage" style="min-height: 480px">
    <header style="height: 480px">
      <img
        style="height: 480px; max-width: 100%"
        src="../assets/finalbanner.png"
        alt="parapodcast"
        class="headerImg"
      />
      <img class="ufo" src="../assets/ufo.gif" alt="ufo" />
    </header>

    <div class="divider">
      <p class="text-white text-h6 q-pa-sm flex flex-center">
        Podcast de investigación de hechos paranormales presentado por Roberto
        Zombrano y Elvira Siller
      </p>
    </div>

    <EpisodeList />
  </q-page>
</template>

<script>
import EpisodeList from "../components/EpisodeList.vue";
export default {
  name: "Home",

  components: {
    EpisodeList,
  },
};
</script>

<style>

</style>
