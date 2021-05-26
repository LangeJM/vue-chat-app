<template>
  <div id="chat-container">
    <div id="chat-user-container" >
      <chat-header header-title="Contacts"/>
      <chat-user-list/>
    </div>
    <div id="chat-content-container"> 
      <chat-header header-title="Chat History"/>
      <chat-history/>
      <chat-composer/>
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
  }
};
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
    height: 80%;
  }
  #chat-content-container {
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
  }


</style>
