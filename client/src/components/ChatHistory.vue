<template>
  <div
    ref="msgContainer"
    v-if="selectedConversation && selectedMessages"
    id="msg-container"
    class="text-left d-flex flex-column border"
  >
    <div
      id="msg"
      v-for="(msg, index) in selectedMessages"
      :key="index"
      :style="[
        msg.author === $store.state.user.email
          ? { 'align-self': 'flex-end', background: 'rgb(154, 237, 160)' }
          : { 'align-self': 'flex-start', background: 'white' },
      ]"
    >
      {{ msg.message }}
      <div id="msg-date">{{ msg.createdAt }}</div>
    </div>

    <div id="spacebar" />
  </div>
  <div v-else id="msg-container" class="text-left d-flex flex-column border">
    <div id="msg"></div>
    <div id="spacebar" />
  </div>
</template>

<script>
export default {
  name: "ChatHistory",
  computed: {
    selectedConversation() {
      return this.$store.state.activeConversation;
    },
    selectedMessages() {
      return this.$store.state.activeConversation.messages;
    },
  },
  updated() {
    const msgContainer = this.$refs.msgContainer;
    msgContainer.scrollTop = msgContainer.scrollHeight;
  },
};
</script>
<style scoped>
#msg-container {
  overflow: auto;
  background-color: rgba(27, 65, 97, 0.479);
  height: 75%;
  flex: 1 1 0;
  position: relative;
  order: 2;
}
#msg {
  margin: 0.5rem 2rem;
  width: 75%;
  padding: 0.5rem 1rem 0.5rem;
  border-radius: 0.5rem;
}
#spacebar {
  min-height: 1rem;
}
#msg-date {
  text-align: right;
  font-size: 70%;
}
</style>