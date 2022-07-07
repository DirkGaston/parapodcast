<template>
  <q-page class="flex flex-center column">
    <q-card class="my-card q-pa-xl card">
      <q-card-section>
        <div class="text-h4 q-pb-md text-white">Episodio: {{ episode.id }}</div>
        <div class="text-h5 q-pb-md text-white">
          Episodio: {{ episode.nombre }}
        </div>
      </q-card-section>
      <q-card-section class="flex justify-center">
        <img style="width: 250px" :src="episode.imgSrc" alt="foto" />
      </q-card-section>
      <q-card-section>
        {{ episode.desc }}
      </q-card-section>

      <iframe
        style="border-radius: 12px"
        :src="`${episode.src}`"
        width="100%"
        height="232"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>

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
export default {
  name: "EpisodeView",
  data() {
    return {
      episode: {},
    };
  },
  created() {
    console.log(this.$route.params);

    fetch("/episodes.json")
      .then((res) => res.json())
      .then((data) => {
        const { id } = this.$route.params;
        this.episode = data.find((u) => u.id == id);
      })
      .catch((e) => console.log(e));
  },
};
</script>
