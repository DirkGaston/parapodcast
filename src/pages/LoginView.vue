<template>
  <q-page class="flex flex-center column">
    <q-card class="my-card q-pa-xl card">
      <q-card-section>
        <div class="text-h4 q-pb-md text-white">Identifícate</div>
        <div class="text-subtitle1 text-grey-5">
          Introduce tus datos para acceder a la aplicación
        </div>
      </q-card-section>
      <q-form v-model="valid" ref="formLogin">
        <q-card-section class="q-pt-none">
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
            class="input"
            dark
            outlined
            placeholder="Password"
            counter
            maxlength="20"
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
        </q-card-section>
        <q-card-section class="flex flex-center">
          <q-btn
            class="q-px-md q-mx-md"
            unelevated
            rounded
            color="secondary"
            label="Continuar"
            :disabled="!valid"
            @click="loginUser"
          />
          <q-btn
            class="q-px-md q-mx-md"
            unelevated
            rounded
            color="negative"
            label="Reset"
            type="reset"
            @click="resetForm"
          />
        </q-card-section>
        <q-card-section>
          <p class="passwordReset" @click="resetPassword">
            ¿Has olvidado tu contraseña?
          </p>
        </q-card-section>
      </q-form>
      <q-card-section class="flex flex-center card_Subtitle q-pt-md">
        <p class="text-body1 text-grey-5">
          ¿No tienes cuenta?
          <router-link style="text-decoration: none" to="/register">
            <span style="text-decoration: none"
              >Regístrate para crear tu cuenta de usuario</span
            >
          </router-link>
        </p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "@firebase/auth";

export default {
  data() {
    return {
      valid: false,
      user: {
        email: "",
        password: "",
      },
      isPwd: true,
      dialog: false,
    };
  },
  methods: {
    loginUser() {
      signInWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then((userCredential) => {
          this.$router.push({ name: "home" });
        })
        .catch((e) => {
          this.dialog = true;
        });
      console.log(userCredential);
    },
    resetPassword() {
      sendPasswordResetEmail(auth, this.user.email)
        .then(() => {
          alert("Password reset email sent!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
    },
    resetForm() {
      this.$refs.formLogin.reset();
    },
  },
};
</script>
