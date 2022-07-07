<template>
  <div class="row justify-center flex">
    <q-card class="my-card q-px-xl col-12 col-md-6 card q-mr-md">
      <h4 style="margin: 25px" class="text-white">1ª TEMPORADA</h4>
      <q-separator class="q-mb-md" color="red" />
      <vueper-slides
        class="no-shadow text-white q-pb-xl"
        :visible-slides="3"
        :gap="3"
        :slide-ratio="1 / 3"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
      >
        <vueper-slide
          v-for="(i, index) in episodes1"
          :key="index"
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
                class="flex justify-center items-end text-h6 text-negative text-weight-bold q-pl-sm"
              ></div
            ></router-link> </template
        ></vueper-slide>
      </vueper-slides>

      <h4 style="margin: 25px" class="text-white">2ª TEMPORADA</h4>
      <q-separator class="q-mb-md" color="red" />
      <vueper-slides
        class="no-shadow text-white q-pb-xl"
        :visible-slides="3"
        :gap="3"
        :slide-ratio="1 / 3"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
      >
        <vueper-slide
          v-for="(i, index) in episodes2"
          :key="index"
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
              ></div
            ></router-link> </template
        ></vueper-slide>
      </vueper-slides>

      <h4 style="margin: 25px" class="text-white">
        ¡EXPERIMENTA VERDADERO TERROR CÓSMICO!
      </h4>
      <q-separator class="q-mb-md" color="red" />
      <h5 style="margin: 25px" class="text-white">
        ¡GRABACIONES FILTRADAS DEL ESPACIO 100% REALES!
      </h5>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/362980763&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div
        style="
          font-size: 10px;
          color: #cccccc;
          line-break: anywhere;
          word-break: normal;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-family: Interstate, Lucida Grande, Lucida Sans Unicode,
            Lucida Sans, Garuda, Verdana, Tahoma, sans-serif;
          font-weight: 100;
        "
      >
        <a
          href="https://soundcloud.com/nasa"
          title="NASA"
          target="_blank"
          style="color: #cccccc; text-decoration: none"
          >NASA</a
        >
        ·
        <a
          href="https://soundcloud.com/nasa/sets/spookyspacesounds"
          title="Spooky Sounds from Across the Solar System"
          target="_blank"
          style="color: #cccccc; text-decoration: none"
          >Spooky Sounds from Across the Solar System</a
        >
      </div>

      <h5 style="margin: 25px" class="text-white">¡IMÁGENES EXCLUSIVAS!</h5>

      <q-img :src="`${apod.hdurl}`" spinner-color="white" class="col-5" />

      <div class="col-4">
        <h5 class="text-white q-ml-md">
          Imágen tomada el: {{ apod.date }} <br />
          ¿Verdad? ¿Conspiración?
        </h5>
      </div>
    </q-card>
    <q-card class="my-card q-pa-md col-12 col-md-3 card_Aside">
      <h5 style="margin: 20px" class="text-white text-left">
        LAS REDES DE LA VERDAD
      </h5>

      <q-separator class="q-mb-md" color="red" />
      <p class="text-white q-pb-sm">
        Síguenos en todos los canales, no te dejes engañar y navega este caos
        con la única fuente de información fiable que hay, la nuestra. Toda una
        carrera dedicada a la búsqueda de la Verdad con V de Verdad.
      </p>
      <div class="row q-mb-md flex justify-center">
        <a
          href="https://www.instagram.com/parapodcastactivity/?hl=en"
          target="”_blank”"
        >
          <q-icon
            name="fa-brands fa-instagram"
            style="font-size: 3rem"
            color="white"
            class="q-pr-xl socialIcon"
          ></q-icon>
        </a>
        <a
          href="https://www.facebook.com/parapodcastactivity/"
          target="”_blank”"
        >
          <q-icon
            name="fa-brands fa-facebook"
            style="font-size: 3rem"
            color="white"
            class="q-pr-xl"
          ></q-icon>
        </a>
        <a href="https://twitter.com/parapodcastact1" target="”_blank”">
          <q-icon
            name="fa-brands fa-twitter"
            style="font-size: 3rem"
            color="white"
            class="q-pr-xl"
          ></q-icon>
        </a>
      </div>

      <Timeline
        id="parapodcastact1"
        sourceType="profile"
        :options="{ tweetLimit: '1', theme: 'dark' }"
        class="q-mb-xl"
      />
      <h5 style="margin: 20px" class="text-white text-left">
        EL CASO DE LA SEMANA
      </h5>
      <q-separator class="q-mb-md" color="red" />
      <p class="text-white q-pb-sm">
        Antigua silla en subasta inglesa asegura que "no está encantada"
      </p>
      <div class="row q-mb-md flex justify-center">
        <q-img
          src="../assets/FULu3sQX0AAaGq5.jpg"
          spinner-color="white"
          style="height: 170px; max-width: 300px"
          img-class="my-custom-image"
          class="rounded-borders q-mb-xl"
        >
        </q-img>
      </div>

      <h6 style="margin: 20px" class="text-white text-left">
        ¡COMPRA MI LIBRO AHORA MISMO!
      </h6>
      <q-separator class="q-mb-md" color="red" />
      <p class="text-white q-pb-sm">
        CITAS A CIEGAS EN LA TERCERA FASE de Roberto Zombrano© (Ølograma
        Editorial, 2020)
      </p>
      <div class="row q-mb-md flex justify-center">
        <q-img
          src="../assets/libro zombrano1.jpg"
          spinner-color="white"
          style="height: 300px; max-width: 200px"
          class="rounded-borders q-mb-xl"
        >
        </q-img>
      </div>
    </q-card>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { Timeline } from "vue-tweet-embed";
import axios from "axios";

export default {
  components: { VueperSlides, VueperSlide, Timeline },

  data() {
    return {
      episodes1: [
        {
          id: "1x01",
          nombre: "POVNIs y el Elixir del Amor",
          image: require("../assets/Episodio1x01.jpeg"),
        },
        {
          id: "1x02",
          nombre: "Ouiya y Juguetes del Edén",
          image: require("../assets/Episodio1x02.jpeg"),
        },
        {
          id: "1x03",
          nombre: "Desapariciones y un Váter",
          image: require("../assets/Episodio1x03.jpeg"),
        },
        {
          id: "1x04",
          nombre: "Psicofonías y Demonios Educados",
          image: require("../assets/Episodio1x04.jpeg"),
        },
        {
          id: "1x05",
          nombre: "Virus y Seres de Luz",
          image: require("../assets/Episodio1x05.jpeg"),
        },
        {
          id: "1x06",
          nombre: "Granjas y Refugios Zombie",
          image: require("../assets/Episodio1x06.jpeg"),
        },
        {
          id: "1x07",
          nombre: "Sex Tape y Pedro Sánchez",
          image: require("../assets/Episodio1x07.jpeg"),
        },
        {
          id: "1x08",
          nombre: "Especial FIN DEL MUNDO",
          image: require("../assets/Episodio1x08.jpeg"),
        },
      ],
      episodes2: [
        {
          id: "2x01",
          nombre: "Conspiraciones y Despedidas",
          image: require("../assets/Episodio2x01.jpg"),
        },
        {
          id: "2x02",
          nombre: "Armarios y Pueblos Anormales",
          image: require("../assets/Episodio2x02.jpg"),
        },
        {
          id: "2x03",
          nombre: "Especial Feliz NAVIDALIEN",
          image: require("../assets/Episodio2x03.jpg"),
        },
      ],
      apod: {},
    };
  },
  async created() {
    try {
      let url =
        "https://api.nasa.gov/planetary/apod?api_key=PdxZNvUVVBIhlE2JYsFWHmoYnfzNUk7mdnmak7wg";

      let response = await axios.get(url);
      this.apod = response.data;
    } catch (error) {
      console.log("error: ", error);
    }
  },
};
</script>

<style>
.my-custom-image {
  filter: sepia();
}

a {
  text-decoration: none;
}
</style>
