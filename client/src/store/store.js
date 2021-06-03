import Vue from "vue";
import Vuex from "vuex";

const apiBaseUrl = "http://localhost:5000";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    message: "",
    user: {},
    previousUser: {},
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
      state.previousUser = state.user;
      state.user = payload;
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
    async getUserList({ commit }, payload) {
      try {
        const response = await fetch(apiBaseUrl + "/users", {
          headers: {
            Authorization: `Bearer ${payload.accessToken}`
          }
        });
        const data = await response.json();
        commit("setUserList", data.data);
      } catch (error) {
        console.log(`error for get userlist: ${error}`);
      }
    },
    async getConversation({ commit }, payload) {
      try {
        const response = await fetch(apiBaseUrl + "/conversations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${payload.accessToken}`
          },
          body: JSON.stringify(payload.subscribers)
        });
        const data = await response.json();
        commit("setActiveConversation", data.data[0]);
      } catch (error) {
        console.log(`error for get conversation: ${error}`);
      }
    }
  }
});
