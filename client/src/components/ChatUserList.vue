<template>
  <div id="user-list">
    <div
      id="user-box"
      v-on:click="selectUser(user)"
      v-for="(user, index) in users"
      :key="index"
      style="
        padding: 1rem;
        border: 1px solid #dee2e6;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
      "
      :style="[
        selectedUser.email === user.email
          ? { background: 'rgba(148, 198, 231, 0.244)' }
          : { background: '' },
      ]"
    >
      <div id="user-text">{{ user.email }}</div>
      <div
        id="online-circle"
        :style="[
          user.online
            ? { background: 'rgb(54, 221, 82)' }
            : { background: 'rgb(202, 199, 199)' },
        ]"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatUserList",
  computed: {
    users() {
      return this.$store.state.userList.filter(
        (user) => user.email !== this.$store.state.user.email
      );
    },
    selectedUser() {
      return this.$store.state.selectedUser;
    },
  },
  asyncComputed: {
    async accessToken() {
      return await this.$auth.getTokenSilently();
    },
  },
  updated() {
    if (!this.$store.state.userList) {
      this.$store.dispatch("getUserList", { accessToken: this.accessToken });
    }
  },
  methods: {
    selectUser(user) {
      console.log(this.$store.state.user.email);
      this.$store.commit("selectUser", user);
      this.$store.dispatch("getConversation", {
        subscribers: [
          this.$store.state.user.email,
          this.$store.state.selectedUser.email,
        ],
        accessToken: this.accessToken,
      });
    },
  },
  sockets: {
    userStatusChange() {
      this.$store.dispatch("getUserList", { accessToken: this.accessToken });
    },
  },
};
</script>

<style scoped lang="scss">
#online-circle {
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  background-color: rgba(148, 198, 231, 0.644);
}
#user-list {
  text-align: left;
  display: flex;
  flex-direction: column;
  border: 1px solid #dee2e6;
  height: 100%;
}
#user-box {
  padding: 2rem;
  border: 1px solid #dee2e6;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
#user-text {
  overflow: hidden;
  max-width: 80%;
}
</style>
