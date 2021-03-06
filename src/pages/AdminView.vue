<template>
  <q-page class="flex justify-center q-mt-md adminPage">
    <div class="row flex justify-center items-center">
      <h2 class="text-white">Administración de Episodios</h2>
      <q-btn color="secondary" class="q-ml-xl q-mt-sm" @click="triggerAdd()"
        >AÑADIR EPISODIO</q-btn
      >
    </div>
    <div class="row flex justify-center" style="width: 90vw">
      <template>
        <div class="q-pa-md">
          <q-table
            title="Episodios"
            :data="episodes"
            :columns="columns"
            row-key="name"
            class="adminTable text-white"
          >
            <template v-slot:body-cell-actions="props">
              <q-tr :props="props">
                <q-td key="actions" :props="props">
                  <div class="iconContainer">
                    <q-icon
                      class="editIcon"
                      name="fa-solid fa-pen"
                      @click="triggerUpdate(props.row.id)"
                    ></q-icon>
                    <q-icon
                      class="deleteIcon"
                      name="fa-solid fa-trash-can"
                      @click="triggerDelete(props.row.did)"
                    ></q-icon>
                  </div>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>
      </template>
      <q-dialog v-model="dialog" class="addDialog">
        <q-card class="my-card custom-dialog">
          <q-card-section>
            <span class="text-h6">Agregando un Episodio</span>
          </q-card-section>
          <q-card-section>
            <q-form ref="formAdd" v-model="valid">
              <q-input
                filled
                input-class="text-white"
                label-color="white"
                v-model="episode.id"
                label="Número de Episodio"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Introduce algo']"
              />

              <q-input
                filled
                input-class="text-white"
                label-color="white"
                v-model="episode.title"
                label="Título del Episodio"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Introduce algo']"
              />

              <q-input
                filled
                input-class="text-white"
                label-color="white"
                v-model="episode.imgSrc"
                label="URL de la imágen de portada"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Introduce algo']"
              />

              <q-input
                filled
                input-class="text-white"
                label-color="white"
                v-model="episode.src"
                label="Enlace de escucha del Episodio"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Introduce algo']"
              />

              <q-input
                filled
                input-class="text-white"
                label-color="white"
                v-model="episode.desc"
                label="Descripción del Episodio"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Introduce algo']"
              />

              <q-input
                filled
                input-class="text-white"
                label-color="white"
                v-model="episode.season"
                v-on:keyup.enter="addEpisode"
                label="Temporada"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Introduce algo']"
              />
            </q-form>
          </q-card-section>
          <q-card-section class="flex row adminButtons justify-center">
            <q-btn
              class="addEpisodeButton q-mx-md"
              :disabled="!valid"
              color="blue-7"
              @click="addEpisode"
              >AGREGAR</q-btn
            >
            <q-btn
              class="q-px-md q-mx-md"
              label="Limpiar Formulario"
              color="negative"
              @click="reset"
            />
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import CustomDialog from "../components/CustomDialog.vue";

export default {
  data() {
    return {
      episode: {
        id: "",
        title: "",
        imgSrc: "",
        src: "",
        desc: "",
        season: "",
        comments: [],
      },
      columns: [
        {
          name: "id",
          required: true,
          label: "Episodio",
          align: "left",
          field: (row) => row.id,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "name",
          align: "center",
          label: "Título",
          field: "name",
          sortable: true,
        },
        {
          name: "season",
          align: "center",
          label: "Temporada",
          field: "season",
          sortable: true,
        },
        {
          name: "actions",
          align: "center",
          label: "Acciones",
          field: "actions",
        },
      ],
      dialog: false,
      dialogDelete: false,
      valid: false,
      idDelete: "",
      idEdit: "",
    };
  },

  methods: {
    ...mapActions([
      "add_episode",
      "delete_episode",
      "update_episode",
      "get_episodes",
    ]),
    addEpisode() {
      this.add_episode({ ...this.episode });
      this.episode.id = null;
      this.episode.title = null;
      this.episode.imgSrc = null;
      this.episode.src = null;
      this.episode.desc = null;
      this.episode.season = null;
      this.dialog = false;
    },
    triggerAdd() {
      this.dialog = true;
    },
    triggerDelete(id) {
      console.log(id);
      this.idDelete = id;
      this.$q
        .dialog({
          component: CustomDialog,
          parent: this,
          title: "Confirm",
          message: "¿Estás seguro de que quieres borrar este episodio?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.delete_episode(this.idDelete);
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        });
    },
    triggerUpdate(id) {
      this.idEdit = id;
      this.$router.push({ path: `/edit/${this.idEdit}` });
    },
    reset() {
      this.episode.id = null;
      this.episode.title = null;
      this.episode.imgSrc = null;
      this.episode.src = null;
      this.episode.desc = null;
      this.episode.season = null;
    },
    resetValidation() {
      this.$refs.formAdd.resetValidation();
    },
    deleteItem() {
      this.dialogDelete = true;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
  },

  computed: {
    ...mapState(["episodes"]),
  },

  watch: {
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.get_episodes();
  },
};
</script>
