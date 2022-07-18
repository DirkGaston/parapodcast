<template>
  <q-toolbar class="flex justify-between items-center">
    <a href="/" style="text-decoration: none">
      <img class="logo" src="/src/assets/PA-Logo-main-without-background.png" />
    </a>
    <q-toolbar-title class="navbar_Title">
      PARAPODCAST ACTIVITY
    </q-toolbar-title>

    <q-btn
      class="q-px-md q-mx-md transparent navBtn gt-sm"
      unelevated
      rounded
      color="secondary"
      label="Administración"
      v-if="user"
      :to="`/admin`"
    />

    <q-btn
      class="q-px-md q-mx-md transparent navBtn gt-sm"
      unelevated
      rounded
      color="secondary"
      label="Noticias"
      v-if="user"
      :to="`/news`"
    />

    <q-btn
      class="q-px-md q-mx-md transparent navBtn"
      unelevated
      rounded
      color="secondary"
      label="Contacto"
      v-if="user"
      :to="`/contact`"
    />

    <q-space />

    <q-btn
      class="q-px-md q-mx-md transparent navBtn gt-sm"
      unelevated
      rounded
      color="secondary"
      label="Login"
      v-if="!user"
      :to="`/login`"
    />

    <q-btn
      class="q-px-md q-mx-md transparent navBtn gt-sm"
      unelevated
      rounded
      color="secondary"
      label="Registro"
      v-if="!user"
      :to="`/register`"
    />

    <q-btn
      class="q-px-md q-mx-md transparent navBtn gt-sm"
      unelevated
      rounded
      color="secondary"
      :label="`Hola ${user.displayName}`"
      v-if="user !== null"
      :to="`/profile/${user.uid}`"
    />
    <q-icon
      name="logout"
      class="text-h6 q-mx-md gt-sm"
      v-if="user !== null"
      @click="logOut"
    />
    <div class="lt-md">
      <q-btn
        flat
        dense
        round
        @click="left = !left"
        icon="menu"
        aria-label="Menu"
      ></q-btn>
    </div>
  </q-toolbar>
</template>

<script>
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "/Users/dirkg/Downloads/STUDIES/Carrera Front End/Módulo 6 - Proyecto Final/parapodcast-web/src/firebase";
export default {
  data() {
    return {
      user: null,
      left: false,
    };
  },
  beforeCreate() {
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  },
  methods: {
    async logOut() {
      await signOut(auth);
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
.router-link-active {
  background-color: #005ef3;
  border-radius: 20px;
}
</style>
