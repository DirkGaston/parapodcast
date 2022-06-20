<template>
  <q-page class="flex flex-center column">
    <q-card class="my-card q-pa-xl card">
      <q-card-section>
        <div class="text-h4 q-pb-md text-white">Episodio: {{ episode.id }}</div>
        <div class="text-h5 q-pb-md text-white">
          Episodio: {{ episode.nombre }}
        </div>
      </q-card-section>
      <q-card-section>
        <img style="width: 500px" :src="episode.imgSrc" alt="foto" />
      </q-card-section>

      <q-card-section class="flex flex-center">
        <q-btn
          class="q-px-md q-mx-md"
          unelevated
          rounded
          color="secondary"
          label="Volver"
          to="/"
        />
        <q-btn
          class="q-px-md q-mx-md"
          unelevated
          rounded
          color="positive"
          label="Marcar Visto"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import episodes from "../episodes.json";
export default {
  name: "EpisodeView",
  data() {
    return {
      episodes,
    };
  },
  computed: {
    episode() {
      const { episodes } = this;
      const { id } = this.$route.params;
      const episode = episodes.find((u) => u.id == id);
      return episode;
    },
  },
};
</script>
