import Vue from "vue";
import Vuex from "vuex";

const apiBaseUrl = "http://localhost:5000";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    message: "",
    user: {},
    userList: [],
    selectedUser: {},
    activeConversation: {}
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
      return (state.userList = payload);
    },
    selectUser: (state, payload) => {
      return (state.selectedUser = payload);
    },
    setActiveConversation: (state, payload) => {
      // to destructure: payload.message, payload.createdAt etc...
      return (state.activeConversation = payload);
    }
  },
  actions: {
    async getUserList({ commit }) {
      try {
        const response = await fetch(apiBaseUrl + "/users");
        const data = await response.json();
        commit("setUserList", data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getConversation({ commit }, payload) {
      let subscribers = { subscribers: payload };
      try {
        const response = await fetch(apiBaseUrl + "/conversations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(subscribers)
        });
        const data = await response.json();
        commit("setActiveConversation", data.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
  }
});
