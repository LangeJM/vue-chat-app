<template>
  <div id="chat-container">
    <div id="chat-user-container" >
      <chat-header :header-title="$store.state.user" smaller-font="true"/>
      <chat-user-list/>
    </div>
    <div id="chat-content-container"> 
      <chat-header header-title="Chat History"/>
      <chat-history/>
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
}
</script>

<style lang="scss" scoped>
  #chat-container {
    display: flex;
    height: 100%;
  }

  #chat-user-container {
    width: 30%;
    display: flex;
    flex-direction: column;
    height: 90%;
    border: 1px solid #dee2e6;
  }
  #chat-content-container {
    width: 70%;
    height: 90%;
    display: flex;
    flex-direction: column;
  }
</style>
