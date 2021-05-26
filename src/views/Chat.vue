<template>
  <div id="chat-container">
    <div id="chat-user-container" >
      <chat-header :header-title="$store.state.user.email"/>
      <chat-user-list/>
    </div>
    <div id="chat-content-container"> 
      <chat-header header-title="Chat History"/>
      <chat-history/>
      <chat-composer v-on:get-message="alert" :chatMessage="message" @updateMessage="updateMessage"/>
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
  data() {
    return {
      message: "",
    }
  },
  methods: {
    alert() {
      alert(this.$store.state.message)
      this.$store.commit('changeMessage', "")
    },
    updateMessage(msg) {
      this.message = msg
    }
  },
}
</script>

<style lang="scss" scoped>
  #chat-container {
    display: flex;
    height: 100%;
  }

  #chat-user-container {
    width: 20%;
    display: flex;
    flex-direction: column;
    height: 90%;
  }
  #chat-content-container {
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
  }
</style>
