import Vue from "vue";
import Vuex from "vuex";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { isReactNative } from "@firebase/util";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    episodes: [],
    users: [],
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
    GET_USERS(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    async get_episodes({ commit }) {
      try {
        const q = query(collection(db, "episodes"), orderBy("id"));
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
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async get_users({ commit }) {
      try {
        const q = query(collection(db, "users"));
        onSnapshot(q, (querySnapshot) => {
          const users = [];
          querySnapshot.forEach((doc) => {
            users.push({
              did: doc.id,
              ...doc.data(),
            });
          });
          commit("GET_USERS", users);
        });
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async add_episode({ commit }, episode) {
      try {
        await addDoc(collection(db, "episodes"), {
          id: episode.id,
          name: episode.name,
          imgSrc: episode.imgSrc,
          src: episode.src,
          desc: episode.desc,
          season: episode.season,
          comments: episode.comments,
        });
      } catch (error) {}
    },
    async add_user({ commit }, user) {
      try {
        await addDoc(collection(db, "users"), {
          displayName: user.displayName,
          bio: user.bio,
          id: user.id,
          photoURL: user.photoURL,
          email: user.email,
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
