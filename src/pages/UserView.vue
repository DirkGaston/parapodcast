<template>
  <q-page class="flex flex-center column" v-if="userData">
    <q-card class="my-card q-pa-xl card">
      <q-card-section>
        <div class="text-h4 q-pb-md text-white">
          Hola {{ userData.displayName }}
        </div>
        <div class="text-h5 q-pb-md text-white">
          Este es tu perfil en nuestro rincón del Misterio
        </div>
        <q-card-section class="flex justify-center row">
          <img
            class="col-12 col-md-4 q-mb-md"
            :src="userData.photoURL"
            alt="foto"
          />
          <p
            v-html="userData.bio"
            class="col-12 col-md-6 q-ml-xl text-white episodeDescription"
          ></p>
        </q-card-section>
      </q-card-section>

      <div class="q-pa-md">
        <q-table
          title="Episodios Escuchados"
          :data="userData.episodes"
          :columns="columns"
          row-key="name"
          class="adminTable text-white"
        >
        </q-table>
      </div>

      <q-card-section class="flex flex-center">
        <q-btn
          class="q-px-md q-mx-md"
          unelevated
          rounded
          color="secondary"
          label="Volver"
          to="/"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
export default {
  data() {
    return {
      user: null,
      columns: [
        {
          name: "id",
          required: true,
          label: "Episodio",
          align: "left",
          field: (row) => row.id,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "name",
          align: "center",
          label: "Título",
          field: "name",
          sortable: true,
        },
        {
          name: "rating",
          align: "center",
          label: "Puntuación",
          field: "rating",
          sortable: true,
        },
        {
          name: "season",
          align: "center",
          label: "Temporada",
          field: "season",
          sortable: true,
        },
      ],
    };
  },
  beforeCreate() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    });
  },
  methods: {
    ...mapActions(["get_users"]),
  },

  computed: {
    ...mapState(["users"]),

    userData() {
      const { users } = this;
      const { id } = this.$route.params;
      return users.find((u) => u.uid == id);
    },
  },

  created() {
    this.get_users();
    console.log(this.users);
  },
};
</script>
