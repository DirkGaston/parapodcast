<template>
  <div>
    <h5 style="margin: 20px" class="text-white text-left">
      LAS REDES DE LA VERDAD
    </h5>

    <q-separator class="q-mb-md" color="red" />
    <p class="text-white q-pb-sm">
      Síguenos en todos los canales, no te dejes engañar y navega este caos con
      la única fuente de información fiable que hay, la nuestra. Toda una
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
      <a href="https://www.facebook.com/parapodcastactivity/" target="”_blank”">
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
  </div>
</template>

<script>
import { Timeline } from "vue-tweet-embed";
export default {
  components: {
    Timeline,
  },
};
</script>
