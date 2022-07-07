import Vue from "vue";
import Vuex from "vuex";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    episodes: [],
  },
  getters: {
    season1Eps(state) {
      return state.episodes.filter((episode) => episode.season === "1");
    },
    season2Eps(state) {
      return state.episodes.filter((episode) => episode.season === "2");
    },
  },
  mutations: {
    GET_EPISODES(state, payload) {
      state.episodes = payload;
    },
  },
  actions: {
    async get_episodes({ commit }) {
      try {
        const q = query(collection(db, "episodes"));
        onSnapshot(q, (querySnapshot) => {
          const episodes = [];
          querySnapshot.forEach((doc) => {
            episodes.push({
              did: doc.id,
              ...doc.data(),
            });
          });
          commit("GET_EPISODES", episodes);
        });
      } catch (error) {}
    },

    async add_episode({ commit }, episode) {
      try {
        await addDoc(collection(db, "episodes"), {
          id: episode.id,
          name: episode.name,
          imgSrc: episode.imgSrc,
          src: episode.src,
          season: episode.season,
          comments: episode.comments,
        });
      } catch (error) {}
    },
    async delete_episode({ commit }, id) {
      console.log(id);
      try {
        const docRef = doc(db, "episodes", id);
        await deleteDoc(docRef);
        console.log("elemento eliminado");
      } catch (error) {
        console.log(error);
      }
    },
    async update_episode({ commit }, episode) {
      try {
        const docRef = doc(db, "episodes", episode.did);
        await updateDoc(docRef, {
          id: episode.id,
          name: episode.name,
          imgSrc: episode.imgSrc,
          src: episode.src,
          season: episode.season,
          comments: episode.comments,
        });
      } catch (error) {}
    },
  },
  modules: {},
});
