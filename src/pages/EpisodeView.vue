<template>
  <q-page class="flex flex-center column">
    <q-card class="my-card q-pa-xl card">
      <q-card-section>
        <div class="text-h4 q-pb-md text-white">
          Episodio {{ episodeData.id }}
        </div>
        <div class="text-h5 q-pb-md text-white">
          {{ episodeData.name }}
        </div>
      </q-card-section>
      <q-card-section class="flex justify-center row">
        <img
          class="col-12 col-md-4 q-mb-md"
          :src="episodeData.imgSrc"
          alt="foto"
        />
        <p
          v-html="episodeData.desc"
          class="col-12 col-md-6 q-ml-xl text-white episodeDescription"
        ></p>
      </q-card-section>
      <q-card-section class="flex row justify-center">
        <iframe
          class="col-10"
          style="border-radius: 12px"
          :src="`${episodeData.src}`"
          width="100%"
          height="230"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe
      ></q-card-section>

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
          label="Marcar Escuchado"
          @click="listenedEpisode"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { auth, db } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";

export default {
  name: "EpisodeView",
  data() {
    return {
      episode: {},
      comment: "",
    };
  },

  methods: {
    ...mapActions(["get_episodes"]),

    async listenedEpisode() {
      try {
        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          episodes: [
            {
              listened: false,
              id: this.$route.params.id,
            },
          ],
        });
      } catch (error) {
        console.log(error);
      }
    },
  },

  computed: {
    ...mapState(["episodes"]),

    episodeData() {
      const { episodes } = this;
      const { id } = this.$route.params;
      return episodes.find((u) => u.id == id);
    },
  },

  created() {
    this.get_episodes();
    console.log(this.episodes);
  },
};
</script>
