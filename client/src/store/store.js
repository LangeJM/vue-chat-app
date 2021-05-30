import Vue from "vue";
import Vuex from "vuex";

const apiBaseUrl = "http://localhost:5000";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    message: "",
    user: {},
    userList: []
  },
  getters: {
    modifiedMessage: state => {
      return state.message + " >> Brought to you by vuex getters..";
    }
  },
  mutations: {
    changeMessage: (state, payload) => {
      return (state.message = payload);
    },
    setActiveUser: (state, payload) => {
      return (state.user = payload);
    },
    setUserList: (state, payload) => {
      const userObject = payload.map(el => ({ ...el, selected: false }));
      return (state.userList = userObject);
    }
  },
  actions: {
    async getUserList({ commit }) {
      try {
        const response = await fetch(apiBaseUrl + "/users/");
        const data = await response.json();
        commit("setUserList", data.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
});
