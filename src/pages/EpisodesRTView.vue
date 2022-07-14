<template>
  <q-page padding class="q-mx-xl">
    <pre class="text-white">{{ episodes }}</pre>
    <h4 class="text-white">Episodes</h4>
    <ul>
      <li class="text-white" v-for="(item, key) in episodes" :key="key">
        {{ key }} - {{ item.title }}
        <router-link :to="`episodesrt/${key}`">Detalle</router-link>
        <q-btn color="red" @click="handleDelete(key)">Eliminar</q-btn>
      </li>
    </ul>
  </q-page>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default {
  data() {
    return {
      episodes: {},
    };
  },
  methods: {
    handleDelete(key) {
      axios
        .delete(
          `https://parapodcast-activity-default-rtdb.firebaseio.com/episodes/${key}.json`
        )
        .then((res) => {
          console.log(res);
          Vue.delete(this.episodes, key);
        })
        .catch((e) => console.log(e));
    },
  },
  created() {
    axios
      .get(
        "https://parapodcast-activity-default-rtdb.firebaseio.com/episodes.json"
      )
      .then((res) => {
        console.log(res.data);
        this.episodes = res.data;
      })
      .catch((e) => console.log(e));
  },
};
</script>
