<template>
  <q-form v-model="valid" ref="formLogin" @reset="onReset">
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
        v-on:keyup.enter="loginUser"
        required
        :type="isPwd ? 'password' : 'text'"
        :rules="[
          (val) => (val && val.length > 5) || 'Más de seis caracteres...',
          (val) => (val && val.length < 20) || 'Menos de veinte caracteres...',
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
      />
    </q-card-section>
    <q-card-section>
      <p class="passwordReset" @click="resetPassword">
        ¿Has olvidado tu contraseña?
      </p>
    </q-card-section>
  </q-form>
</template>

<script>
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "@firebase/auth";
import CustomDialog from "../components/CustomDialog.vue";

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
          this.$q
            .dialog({
              component: CustomDialog,
              parent: this,
              title: "Alert",
              message: "Usuario / Contraseña incorrectos!",
            })
            .onOk(() => {
              // console.log('OK')
            });
        });
      console.log(userCredential);
    },
    resetPassword() {
      sendPasswordResetEmail(auth, this.user.email)
        .then(() => {
          this.$q
            .dialog({
              component: CustomDialog,
              parent: this,
              title: "Alert",
              message: `"Se ha enviado un correo de recuperación de contraseña a ${this.user.email}"`,
            })
            .onOk(() => {
              // console.log('OK')
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
    },
    onReset() {
      this.user.email = null;
      this.user.password = null;
    },
  },
};
</script>
