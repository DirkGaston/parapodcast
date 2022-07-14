<template>
  <q-page padding class="q-mx-xl text-white">
    <pre>{{ episode }}</pre>
    <h4>{{ episode.title }}</h4>
    <p>{{ episode.description }}</p>
    <form @submit.prevent="handleComment">
      <q-input v-model="text" label="Deje un comentario"></q-input>
      <q-btn type="submit">Añadir</q-btn>
    </form>
    <ul>
      <li v-for="(item, index) in episode.comments" :key="index">
        {{ item.text }}
      </li>
    </ul>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      episode: {},
      text: "",
    };
  },
  methods: {
    handleComment() {
      this.episode.comments.push({
        text: this.text,
        date: Date.now(),
        uid: "Dirk",
      });
      axios
        .patch(
          `https://parapodcast-activity-default-rtdb.firebaseio.com/episodes/${this.$route.params.id}.json`,
          {
            comments: this.episode.comments,
          }
        )
        .then((red) => {
          console.log(res.data);
        })
        .catch((e) => console.log(e));
    },
  },
  created() {
    axios
      .get(
        `https://parapodcast-activity-default-rtdb.firebaseio.com/episodes/${this.$route.params.id}.json`
      )
      .then((res) => {
        console.log(res.data);
        if (!res.data.comments) {
          console.log("entró");
          this.episode = res.data;
          this.episode.comments = [];
        }
        this.episode = res.data;
      })
      .catch((e) => console.log(e));
  },
};
</script>
