<template>
  <q-drawer v-model="left" side="left" bordered content-class="bg-black">
    <router-link style="text-decoration: none" to="/parapedia">
      <q-btn
        class="q-px-md q-mx-md q-mt-md transparent navBtn"
        unelevated
        rounded
        color="secondary"
        label="La Parapedia"
        v-if="user"
      />
    </router-link>
    <router-link style="text-decoration: none" to="/news">
      <q-btn
        class="q-px-md q-mx-md transparent navBtn"
        unelevated
        rounded
        color="secondary"
        label="Noticias"
        v-if="user"
      />
    </router-link>
    <router-link style="text-decoration: none" to="/contact">
      <q-btn
        class="q-px-md q-mx-md transparent navBtn"
        unelevated
        rounded
        color="secondary"
        label="Contacto"
        v-if="user"
      />
    </router-link>
    <router-link style="text-decoration: none" to="/login">
      <q-btn
        class="q-px-md q-mx-md transparent navBtn"
        unelevated
        rounded
        color="secondary"
        label="Login"
        v-if="!user"
      />
    </router-link>
    <router-link style="text-decoration: none" to="/register">
      <q-btn
        class="q-px-md q-mx-md transparent navBtn"
        unelevated
        rounded
        color="secondary"
        label="Registro"
        v-if="!user"
      />
    </router-link>
    <router-link
      style="text-decoration: none"
      :to="`/profile/${user.uid}`"
      v-if="user !== null"
    >
      <q-btn
        class="q-px-md q-mx-md transparent navBtn"
        unelevated
        rounded
        color="secondary"
        :label="user.email"
        v-if="user !== null"
      />
    </router-link>
    <router-link style="text-decoration: none" to="/news">
      <q-icon
        name="logout"
        class="text-h6 q-mx-md q-mt-md q-pl-xl text-white"
        v-if="user !== null"
        @click="logOut"
      />
    </router-link>
  </q-drawer>
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
