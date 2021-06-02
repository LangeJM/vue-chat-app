<template>
  <div id="chat-container">
    <div id="chat-user-container">
      <chat-header :header-title="$store.state.user" smaller-font="true" />
      <chat-user-list />
    </div>
    <div id="chat-content-container">
      <chat-header header-title="Chat History" />
      <chat-history />
      <chat-composer />
    </div>
  </div>
</template>

<script>
import ChatUserList from "../components/ChatUserList";
import ChatHistory from "../components/ChatHistory";
import ChatComposer from "../components/ChatComposer";
import ChatHeader from "../components/ChatHeader";

export default {
  name: "Chat",
  components: {
    ChatUserList,
    ChatHistory,
    ChatComposer,
    ChatHeader,
  },
  created() {
    setTimeout(() => {
      this.$socket.emit("newUserOnline", this.$store.state.user.email);
    }, 200);
  },
};
</script>

<style lang="scss" scoped>
#chat-container {
  display: flex;
  height: 90%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

#chat-user-container {
  width: 30%;
  display: flex;
  flex-direction: column;
  height: 100%;
}
#chat-content-container {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
