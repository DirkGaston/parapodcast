<template>
  <q-page class="flex justify-center q-mt-md adminPage">
    <div class="row flex justify-center items-center">
      <h3 class="display-3 mb-5 text-white">
        Editando el episodio: {{ episodeData.name }}
      </h3>
    </div>
    <div class="row flex justify-center" style="width: 90vw">
      <q-form ref="formAdd" v-model="valid" class="editTable">
        <q-input
          filled
          v-model="episode.id"
          label="Número de Episodio"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Introduce algo']"
        />

        <q-input
          filled
          v-model="episode.name"
          label="Título del Episodio"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Introduce algo']"
        />

        <q-input
          filled
          v-model="episode.imgSrc"
          label="URL de la imágen de portada"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Introduce algo']"
        />

        <q-input
          filled
          v-model="episode.src"
          label="Enlace de escucha del Episodio"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Introduce algo']"
        />

        <q-input
          filled
          v-model="episode.season"
          label="Temporada"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Introduce algo']"
        />

        <q-btn
          class="q-mr-4"
          color="positive"
          :disabled="!valid"
          @click="updateEpisode"
        >
          ACTUALIZAR EPISODIO</q-btn
        >
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Edit",
  data() {
    return {
      episode: {
        id: "",
        name: "",
        imgSrc: "",
        src: "",
        season: "",
        comments: [],
      },
      textRules: [(v) => !!v || "Dato necesario"],
      valid: false,
    };
  },

  methods: {
    ...mapActions(["update_episode", "get_episodes"]),
    updateEpisode() {
      this.update_episode({ ...this.episode });
      this.episode = {};
      this.back();
    },
    reset() {
      this.$refs.formAdd.reset();
    },
    resetValidation() {
      this.$refs.formAdd.resetValidation();
    },
    back() {
      this.$router.push({ name: "admin" });
    },
  },
  computed: {
    ...mapState(["episodes"]),

    episodeData() {
      const { episodes } = this;
      const { id } = this.$route.params;
      this.episode = episodes.find((u) => u.id == id);
      return this.episode;
    },
  },
  created() {
    this.get_episodes();
  },
};
</script>
