<template>
  <q-dialog ref="dialog" @hide="onDialogHide" v-on:keyup.enter="onOKClick">
    <q-card class="q-dialog-plugin custom-dialog">
      <q-card-section class="text-center">
        <p class="text-white">{{ this.message }}</p>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn
          class="q-mb-md"
          color="secondary"
          label="OK"
          @click="onOKClick"
        />
        <q-btn
          class="q-mb-md"
          color="negative"
          label="Cancelar"
          @click="onCancelClick"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    title: "",
    message: "",
  },

  methods: {
    show() {
      this.$refs.dialog.show();
    },

    hide() {
      this.$refs.dialog.hide();
    },

    onDialogHide() {
      this.$emit("hide");
    },

    onOKClick() {
      this.$emit("ok");

      this.hide();
    },

    onCancelClick() {
      this.hide();
    },
  },
};
</script>
