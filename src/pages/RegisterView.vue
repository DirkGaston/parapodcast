<template>
  <q-page class="row justify-center q-mt-md">
    <div class="gt-md col-md-3 q-mr-md">
      <img 
        id="group_Photo"
        style="height: 700px"
        src="../assets/3 arbol logo.jpg"
        alt="the_band"
      />
    </div>

    <q-card class="my-card q-pa-xl col-md-4 card" style="height: 700px">
      <q-card-section>
        <div class="text-h4 q-pb-md text-white">Crea tu cuenta</div>
        <div class="text-subtitle1 text-grey-5">
          Para buscadores de la Verdad
        </div>
      </q-card-section>
      <q-form v-model="valid" ref="formRegister">
        <q-card-section class="q-pt-none">
          <q-input
            color="secondary"
            class="q-mb-md input"
            dark
            outlined
            placeholder="Nombre"
            v-model="user.name"
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
            @click="resetInput"
          />
        </q-card-section>
      </q-form>
      <q-card-section class="flex flex-center card_Subtitle q-pt-md">
        <p class="text-body1 text-grey-5">
          ¿Ya tienes cuenta?
          <router-link style="text-decoration: none" to="/login">
            <span style="text-decoration: none">Entra</span>
          </router-link>
        </p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default {
  data() {
    return {
      valid: false,
      user: {
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      isPwd: true,
    };
  },
  methods: {
    async registerUser() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.user.email,
          this.user.password
        );
        console.log(userCredential);
        this.$router.push({ name: "login" });
      } catch (error) {
        console.log(error.code);
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("El correo ya está siendo utilizado");
            break;
        }
      }
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
    },
  },
};
</script>
