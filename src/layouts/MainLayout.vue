<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white header">
      <div class="q-px-md q-py-xs">
        <q-toolbar class="flex justify-between items-center">
          <a href="/" style="text-decoration: none">
            <img
              class="logo"
              src="../assets/PA-Logo-main-without-background.png"
            />
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
            :label="user.email"
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
      </div>
    </q-header>

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

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-primary text-white footer">
      <q-toolbar class="full-width row">
        <q-toolbar-title class="text-subtitle1 flex flex-center">
          © 2022 Parapodcast Activity</q-toolbar-title
        >
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
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
