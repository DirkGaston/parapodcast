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
          style="max-width: 100%"
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

      <q-card-section class="flex flex-center column">
        <h5 class="text-white">¡Comparte el episodio en tus redes!</h5>
        <div class="row socialButtons">
          <ShareNetwork
            network="facebook"
            :url="`https://parapodcast-activity.web.app/episode/${episodeData.id}`"
            :title="`${episodeData.name}`"
            :description="`${episodeData.desc}`"
            quote="Siempre en busca de la Verdad con V de Verdad"
            hashtags="parapodcast"
            style="text-decoration: none"
            class="q-px-md"
          >
            <q-icon
              name="fa-brands fa-facebook"
              size="xl"
              style="color: #4267b2"
            >
            </q-icon>
          </ShareNetwork>

          <ShareNetwork
            network="whatsapp"
            :url="`https://parapodcast-activity.web.app/episode/${episodeData.id}`"
            :title="`${episodeData.name}`"
            :description="`${episodeData.desc}`"
            quote="Siempre en busca de la Verdad con V de Verdad"
            hashtags="parapodcast"
            style="text-decoration: none"
            class="q-px-md"
          >
            <q-icon
              name="fa-brands fa-whatsapp"
              size="xl"
              style="color: #25d366"
            >
            </q-icon>
          </ShareNetwork>
          <ShareNetwork
            network="twitter"
            :url="`https://parapodcast-activity.web.app/episode/${episodeData.id}`"
            :title="`${episodeData.name}`"
            :description="`${episodeData.desc}`"
            quote="Siempre en busca de la Verdad con V de Verdad"
            hashtags="parapodcast"
            style="text-decoration: none"
            class="q-px-md"
          >
            <q-icon
              name="fa-brands fa-twitter"
              size="xl"
              style="color: #1da1f2"
            >
            </q-icon>
          </ShareNetwork>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { auth, db } from "../firebase";
import { updateDoc, getDoc, doc } from "firebase/firestore";
import CustomDialog from "../components/CustomDialog.vue";

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
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document.data:", docSnap.data());

          const episodeUpdate = {
            listened: true,
            id: this.$route.params.id,
            name: this.episodeData.name,
            season: this.episodeData.season,
          };

          const episodeRatingUpdate = {
            rating: this.rating,
          };

          let episodesUpdate;

          const episodes = docSnap.data().episodes;
          if (episodes && episodes.length) {
            const findEpisode = episodes.find(
              (item) => item.id === this.$route.params.id
            );
            if (findEpisode) {
              episodesUpdate = episodes.map((item) =>
                item.id === this.$route.params.id ? episodeUpdate : item
              );
            } else {
              episodesUpdate = [...episodes, episodeUpdate];
            }
          } else {
            episodesUpdate = [episodeUpdate];
          }

          await updateDoc(docRef, {
            episodes: episodesUpdate,
          });
          this.$q
            .dialog({
              component: CustomDialog,
              title: "Prompt",
              message: "¡Esperamos que lo hayas disfrutado!",
            })
            .onOk((data) => {
              console.log(this.rating);
            });
        } else {
          console.log("No such document!");
        }
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
