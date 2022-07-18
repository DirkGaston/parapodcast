<template>
  <q-page class="flex column justify-center adminPage">
    <div class="column justify-center items-center editPageTitle">
      <h3 class="display-3 text-white h31">Editando el episodio:</h3>
      <h3 class="display-3 text-white h32">{{ episodeData.name }}</h3>
    </div>
    <div class="row flex justify-center">
      <q-form ref="formAdd" v-model="valid" class="custom-dialog">
        <q-input
          filled
          input-class="text-white"
          label-color="white"
          v-model="episode.id"
          label="Número de Episodio"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Introduce algo']"
        />

        <q-input
          filled
          input-class="text-white"
          label-color="white"
          v-model="episode.name"
          label="Título del Episodio"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Introduce algo']"
        />

        <q-input
          filled
          input-class="text-white"
          label-color="white"
          v-model="episode.desc"
          label="Descripción del Episodio"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Introduce algo']"
        />

        <q-input
          filled
          input-class="text-white"
          label-color="white"
          v-model="episode.imgSrc"
          label="URL de la imágen de portada"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Introduce algo']"
        />

        <q-input
          filled
          input-class="text-white"
          label-color="white"
          v-model="episode.src"
          label="Enlace de escucha del Episodio"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Introduce algo']"
        />

        <q-input
          filled
          input-class="text-white"
          label-color="white"
          v-model="episode.season"
          label="Temporada"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Introduce algo']"
        />
        <q-card-section class="flex row adminButtons justify-center">
          <q-btn
            class="q-mr-4"
            color="positive"
            :disabled="!valid"
            @click="updateEpisode"
          >
            ACTUALIZAR EPISODIO</q-btn
          >
        </q-card-section>
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
        desc: "",
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
