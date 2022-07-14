<template>
  <div>
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
        font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans,
          Garuda, Verdana, Tahoma, sans-serif;
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      apod: "",
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
