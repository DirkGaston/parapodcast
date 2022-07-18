<template>
  <q-page v-if="userData">
    <q-card class="my-card q-pa-xl card flex flex-center column col-5">
      <q-card-section class="flex column">
        <div class="text-h4 q-pb-md text-white text-center">
          Hola {{ userData.displayName }} <br /><br />
          Este es tu perfil en nuestro rincón del Misterio
        </div>
        <img class="col-5" :src="userData.photoURL" alt="" />
        <p>{{ userData.bio }}</p>
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
