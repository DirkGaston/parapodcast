<template>
  <q-page class="row justify-center q-mt-md">
    <div class="gt-md col-md-3 q-mr-md">
      <img id="group_Photo" src="../assets/3 arbol logo.jpg" alt="the_band" />
    </div>

    <q-card class="my-card q-pa-xl col-10 col-lg-4 card">
      <q-card-section>
        <div class="text-h4 q-pb-md text-white">Crea tu cuenta</div>
        <div class="text-subtitle1 text-grey-5">
          Para buscadores de la Verdad
        </div>
      </q-card-section>
      <q-form v-model="valid" ref="formRegister" @reset="onReset">
        <q-card-section class="q-pt-none">
          <q-input
            color="secondary"
            class="q-mb-md input"
            dark
            outlined
            placeholder="Nombre"
            v-model="user.displayName"
            required
            :rules="[(val) => (val && val.length > 0) || 'Escribe algo...']"
          >
            <template v-slot:append> </template>
          </q-input>

          <q-input
            color="secondary"
            class="q-mb-md input"
            dark
            outlined
            placeholder="Apellido"
            v-model="user.lastName"
            required
            :rules="[(val) => (val && val.length > 0) || 'Escribe algo...']"
          >
            <template v-slot:append> </template>
          </q-input>

          <q-input
            color="secondary"
            class="q-mb-md input"
            dark
            outlined
            placeholder="Bio"
            v-model="user.bio"
            required
            :rules="[(val) => (val && val.length > 0) || 'Escribe algo...']"
          >
            <template v-slot:append> </template>
          </q-input>

          <q-input
            color="secondary"
            class="q-mb-md input"
            dark
            outlined
            placeholder="URL Foto"
            v-model="user.photoURL"
            required
            :rules="[(val) => (val && val.length > 0) || 'Escribe algo...']"
          >
            <template v-slot:append> </template>
          </q-input>
          <q-input
            color="secondary"
            class="q-mb-md input"
            dark
            outlined
            placeholder="Email"
            v-model="user.email"
            required
            :rules="[
              (val) => (val && val.length > 0) || 'Escribe algo...',
              (val) =>
                /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val) || 'Formato incorrecto',
            ]"
          >
            <template v-slot:append> </template>
          </q-input>
          <q-input
            color="secondary"
            class="q-mb-md input"
            dark
            outlined
            placeholder="Contraseña"
            v-model="user.password"
            required
            :type="isPwd ? 'password' : 'text'"
            :rules="[
              (val) => (val && val.length > 5) || 'Más de seis caracteres...',
              (val) =>
                (val && val.length < 20) || 'Menos de veinte caracteres...',
            ]"
          >
            <template v-slot:append
              ><q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-input
            color="secondary"
            class="q-mb-md input"
            dark
            outlined
            placeholder="Confirma contraseña"
            v-model="user.confirmPassword"
            v-on:keyup.enter="registerUser"
            required
            :type="isPwd ? 'password' : 'text'"
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Tienes que confirmar tu contraseña...',
              (val) =>
                val === this.user.password || 'La contraseña no coincide...',
            ]"
          >
            <template v-slot:append
              ><q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </q-card-section>
        <q-card-section class="flex flex-center">
          <q-btn
            class="q-px-md q-mx-md"
            unelevated
            rounded
            color="secondary"
            label="Crear Cuenta"
            :disabled="!valid"
            @click="registerUser"
          />
          <q-btn
            class="q-px-md q-mx-md"
            unelevated
            rounded
            color="negative"
            type="reset"
            label="Reset"
          />
        </q-card-section>
        <q-card-section class="flex flex-center card_Subtitle q-pt-md">
          <p class="text-body1 text-grey-5">
            ¿Ya tienes cuenta?
            <router-link style="text-decoration: none" to="/login">
              <span style="text-decoration: none">Entra</span>
            </router-link>
          </p>
        </q-card-section>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import CustomDialog from "../components/CustomDialog.vue";

export default {
  data() {
    return {
      valid: false,
      user: {
        displayName: "",
        lastName: "",
        bio: "",
        id: "",
        photoURL: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      isPwd: true,
    };
  },
  methods: {
    ...mapActions(["add_user"]),

    async registerUser() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.user.email,
          this.user.password
        );
        console.log(userCredential);
        updateProfile(auth.currentUser, {
          displayName: this.user.displayName,
          photoURL: this.user.photoURL,
        });
        await setDoc(doc(db, "users", auth.currentUser.uid), {
          displayName: this.user.displayName,
          lastName: this.user.lastName,
          bio: this.user.bio,
          uid: auth.currentUser.uid,
          photoURL: this.user.photoURL,
          email: this.user.email,
        });
        this.$q
          .dialog({
            component: CustomDialog,
            parent: this,
            title: "Alert",
            message: "¡Cuenta creada correctamente!",
          })
          .onOk(() => {
            // console.log('OK')
          });
        this.$router.push({ name: "home" });
      } catch (error) {
        console.log(error.code);
        switch (error.code) {
          case "auth/email-already-in-use":
            this.$q
              .dialog({
                component: CustomDialog,
                parent: this,
                title: "Alert",
                message: "¡Este email ya está siendo utilizado!",
              })
              .onOk(() => {
                // console.log('OK')
              });
            break;
        }
      }
    },
    onReset() {
      this.user.displayName = null;
      this.user.lastName = null;
      this.user.bio = null;
      this.user.photoURL = null;
      this.user.email = null;
      this.user.password = null;
      this.user.confirmPassword = null;
    },
  },
};
</script>
