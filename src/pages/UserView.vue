<template>
  <q-page v-if="userData">
    <q-card class="my-card q-pa-xl card flex flex-center column col-5">
      <q-card-section class="flex column">
        <div class="text-h4 q-pb-md text-white text-center">
          Hola {{ userData.displayName }} <br /><br />
          Este es tu perfil en nuestro rincón del Misterio
        </div>
        <img class="col-5" :src="userData.photoURL" alt="" />
      </q-card-section>

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
