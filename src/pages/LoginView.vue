<template>
  <q-page class="flex flex-center column">
    <q-card class="my-card q-pa-xl card">
      <q-card-section>
        <div class="text-h4 q-pb-md text-white">Identifícate</div>
        <div class="text-subtitle1 text-grey-5">
          Introduce tus datos para acceder a la aplicación
        </div>
      </q-card-section>
      <LoginForm />
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
import LoginForm from "../components/LoginForm.vue";

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
  components: {
    LoginForm,
  },
};
</script>
