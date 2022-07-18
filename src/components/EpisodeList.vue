<template>
  <div>
    <h4 style="margin: 25px" class="text-white">1ª TEMPORADA</h4>
    <q-separator class="q-mb-md" color="red" />
    <vueper-slides
      class="no-shadow text-white q-pb-xl"
      :visible-slides="3"
      :gap="3"
      :slide-ratio="1 / 3"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2, slideRatio: 1 / 2 } }"
    >
      <vueper-slide
        v-for="(i, index) in season1eps"
        :key="index"
        :image="i.imgSrc"
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
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2, slideRatio: 1 / 2 } }"
    >
      <vueper-slide
        v-for="(i, index) in season2eps"
        :key="index"
        :image="i.imgSrc"
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
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },

  async created() {
    try {
      let url =
        "https://api.nasa.gov/planetary/apod?api_key=PdxZNvUVVBIhlE2JYsFWHmoYnfzNUk7mdnmak7wg";

      let response = await axios.get(url);
      this.apod = response.data;
    } catch (error) {
      console.log("error: ", error);
    }
    this.get_episodes();
  },

  methods: {
    ...mapActions(["get_episodes"]),
  },

  computed: {
    ...mapState(["episodes"]),
    ...mapGetters(["season1Eps", "season2Eps"]),
    season1eps() {
      return this.$store.getters.season1Eps;
    },
    season2eps() {
      return this.$store.getters.season2Eps;
    },
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
