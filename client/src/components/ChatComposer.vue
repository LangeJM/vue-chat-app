<template>
  <div id="chat-message-container">
    <textarea id="chat-message" ref="textarea" placeholder="Type a message" v-on:keyup="resizeTextarea" @input="onChange" :value="message" />
    <font-awesome-icon icon="paper-plane" size="2x" v-on:click="onClick" />
  </div>
</template>

<script>
export default {
  name: "ChatComposer",  
  methods: {
    async onClick() {
      const requestBody = {
        author: this.$store.state.user.email,
        recipient: this.$store.state.selectedUser.email,
        message: this.$store.state.message
      }
      try {
        const response = await fetch("http://localhost:5000/conversations/message", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(requestBody)
          // body: subscribers
        });
        const data = await response.json();
        console.log(data)
      } catch (error) {
        console.log(error);
      }
      this.$refs.textarea.style.height = "2.5rem";
      this.$store.commit('changeMessage',"")
      this.$store.dispatch("getConversation", [this.$store.state.user.email,this.$store.state.selectedUser.email])


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
  width: 75%;
  border: grey;
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: white;   
  overflow: hidden;  
  height: 2.5rem;
}


</style>