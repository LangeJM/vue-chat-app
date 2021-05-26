import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    message: ""
  },
  getters: {
    modifiedMessage: state => {
      return state.message + " >> Brought to you by vuex getters..";
    }
  },
  mutations: {
    changeMessage: (state, payload) => {
      return (state.message = payload);
    }
  }
});
