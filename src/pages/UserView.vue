<template>
  <q-page class="flex flex-center column">
    <q-card class="my-card q-pa-xl card">
      <q-card-section>
        <div class="text-h4 q-pb-md text-white">USUARIO: {{ user.email }}</div>
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
      this.user = user;
    });
  },
};
</script>
