import Vue from "vue";
import Vuex from "vuex";
import signIn from "@/services/auth.service.js";
import Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      mail: null,
      password: null
    },
    error: null
  },
  getters: {
    userData: state => state.userData,
    userEmail: state => state.userData.mail,
    userPassword: state => state.userData.password,
    errorSignIn: state => state.error
  },
  mutations: {
    changeMail(state, payload) {
      state.userData.mail = payload;
    },
    changePassword(state, payload) {
      state.userData.password = payload;
    },
    errorSignIn(state, payload) {
      state.error = payload;
    },
    getSignInData(state, payload) {
      state.credentials = payload;
    }
  },
  actions: {
    changeMail({ commit }, payload) {
      commit("changeMail", payload);
    },
    changePassword({ commit }, payload) {
      commit("changePassword", payload);
    },
    signIn: async ({ commit }, payload) => {
      try {
        const auth = await signIn.signin(payload);
        commit("getSignInData", auth.data);
        commit("errorSignIn", null);
        Cookies.set("auth-token", auth.data.token, {
          expires: auth.data.expires
        });
      } catch (e) {
        console.log(e);
        commit("errorSignIn", e);
      }
    }
  },
  modules: {}
});
