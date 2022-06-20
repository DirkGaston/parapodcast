<template>
  <div class="row justify-center flex">
    <q-card class="my-card q-px-xl col-12 col-md-6 card q-mr-md">
      <h4 style="margin: 25px" class="text-white">1ª TEMPORADA</h4>
      <q-separator class="q-mb-md" color="red" />
      <vueper-slides
        class="no-shadow text-white"
        :visible-slides="3"
        :gap="3"
        :slide-ratio="1 / 3"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
      >
        <vueper-slide
          v-for="i in episodes1"
          :key="i"
          :image="i.image"
          style="border-radius: 10px"
          class="q-pb-md"
        >
          <template #content>
            <router-link
              class="text-white"
              style="text-decoration: none"
              :to="`/episode/${i.id}`"
              ><div
                style="height: 100%"
                class="flex justify-center items-end text-h6"
              >
                EPISODIO {{ i.id }}
              </div></router-link
            >
          </template></vueper-slide
        >
      </vueper-slides>

      <h4 style="margin: 25px" class="text-white">2ª TEMPORADA</h4>
      <q-separator class="q-mb-md" color="red" />
      <vueper-slides
        class="no-shadow text-white"
        :visible-slides="2"
        :gap="3"
        :slide-ratio="1 / 2"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
      >
        <vueper-slide
          v-for="i in episodes2"
          :key="i"
          :image="i.image"
          style="border-radius: 10px"
          class="q-pb-md"
        >
          <template #content>
            <div
              style="height: 100%"
              class="flex justify-center items-end text-h6"
            >
              EPISODIO {{ i.number }}
            </div>
          </template></vueper-slide
        >
      </vueper-slides>
    </q-card>
    <q-card class="my-card q-pa-md col-12 col-md-3 card_Aside">
      <h4 class="text-white text-center">NUESTRAS REDES</h4>
      <q-separator class="q-mb-md" color="red" />
      <h5 class="text-white">TWITTER PARAPODCAST</h5>
      <Timeline
        id="parapodcastact1"
        sourceType="profile"
        :options="{ tweetLimit: '1', theme: 'dark' }"
      />
      <h5 class="text-white">INSTAGRAM PARAPODCAST</h5>
      <q-separator class="q-mb-md" color="red" />
      <div class="flex justify-center">
        <a
          href="https://www.instagram.com/parapodcastactivity/?hl=en"
          target="”_blank”"
          ><img
            class="flex justify-center"
            style="width: 250px"
            src="../assets/PA Logo social networks.png"
            alt="instagram"
        /></a>
      </div>

      <h5 class="text-white">FACEBOOK PARAPODCAST</h5>
      <q-separator class="q-mb-md" color="red" />
    </q-card>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { Tweet, Moment, Timeline } from "vue-tweet-embed";

export default {
  components: { VueperSlides, VueperSlide, Tweet, Moment, Timeline },

  data() {
    return {
      episodes1: [
        {
          id: "1x01",
          nombre: "POVNIs y el Elixir del Amor",
          image: require("../assets/PA Logo main2.png"),
        },
        {
          id: "1x02",
          nombre: "Ouiya y Juguetes del Edén",
          image: require("../assets/PA Logo main2.png"),
        },
        {
          id: "1x03",
          nombre: "Desapariciones y un Váter",
          image: require("../assets/PA Logo main2.png"),
        },
        {
          id: "1x04",
          nombre: "Psicofonías y Demonios Educados",
          image: require("../assets/PA Logo main2.png"),
        },
        {
          id: "1x05",
          nombre: "Virus y Seres de Luz",
          image: require("../assets/PA Logo main2.png"),
        },
        {
          id: "1x06",
          nombre: "Granjas y Refugios Zombie",
          image: require("../assets/PA Logo main2.png"),
        },
        {
          id: "1x07",
          nombre: "Sex Tape y Pedro Sánchez",
          image: require("../assets/PA Logo main2.png"),
        },
        {
          id: "1x08",
          nombre: "Especial FIN DEL MUNDO",
          image: require("../assets/PA Logo main2.png"),
        },
      ],
      episodes2: [
        {
          number: "2x01",
          image: require("../assets/PA Logo main2.png"),
        },
        {
          number: "2x02",
          image: require("../assets/PA Logo main2.png"),
        },
        {
          number: "2x03",
          image: require("../assets/PA Logo main2.png"),
        },
      ],
    };
  },
};
</script>

<style></style>
