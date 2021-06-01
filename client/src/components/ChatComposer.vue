<template>
  <div id="chat-message-container">
    <textarea id="chat-message" v-on:keyup.ctrl.enter="onClick" ref="textarea" placeholder="Type a message" v-on:keydown="resizeTextarea" @input="onChange" :value="message" />
    <font-awesome-icon icon="paper-plane" size="2x" v-on:click="onClick" />
  </div>
</template>

<script>
export default {
  name: "ChatComposer",
  sockets: {
    newMessage: function(data) {
      console.log("New message returning from the server:", data);
      if (data.author === this.$store.state.selectedUser.email && data.recipient === this.$store.state.user.email) {
        this.$store.dispatch("getConversation", [data.author, data.recipient])
      }
    },
  },  
  methods: {
    async onClick() {
      const requestBody = {
        author: this.$store.state.user.email,
        recipient: this.$store.state.selectedUser.email,
        message: this.$store.state.message
      }
      try {
        await fetch("http://localhost:5000/conversations/message", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(requestBody)
          // body: subscribers
        });
        
      } catch (error) {
        console.log(error);
      }
      const socketMessageObject = {author:requestBody.author, recipient:requestBody.recipient}
      this.$refs.textarea.style.height = "2.5rem";
      this.$store.commit('changeMessage',"")
      this.$socket.emit("newMessage", socketMessageObject);
      this.$store.dispatch("getConversation", [this.$store.state.user.email,this.$store.state.selectedUser.email])
    },
    onKeyPress(){
      console.log("Pressed Key")
      },
    onChange (e) {
      // This is for training purposes only, there is no need to emit to parent. All can be handle here..
      this.$store.commit('changeMessage',e.target.value)
    },
    resizeTextarea() {
      this.$refs.textarea.style.height = "1px";
      this.$refs.textarea.style.height = (this.$refs.textarea.scrollHeight)+"px";
    }
  },
  computed: {
    message() {
      return this.$store.state.message
    }
  }
};
  
</script>
<style scoped lang="scss">

#chat-message-container {
  min-height: 60px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  order: 3;
  position: relative;
  border: 1px solid #dee2e6;
}

#chat-message {
  width: 80%;
  border: grey;
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: white;   
  overflow: hidden;  
  height: 2.5rem;
}


</style>