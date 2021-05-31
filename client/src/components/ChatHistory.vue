<template>
  <div v-if="selectedMessages" id="msg-container" class="text-left d-flex flex-column border">
    <div id="msg" v-for="(msg, index) in selectedMessages" :key="index" 
    :style="[msg.author === $store.state.user.email ? {'align-self': 'flex-end', 'background' : 'rgb(154, 237, 160)'} : {'align-self': 'flex-start', 'background' : 'white'}]"
    >
      {{msg.message}}
    </div>
    <div id="spacebar"/>
    
  </div>
  <div v-else id="msg-container" class="text-left d-flex flex-column border">
    <div id="msg">
    </div>
    <div id="spacebar"/>
    
  </div>
</template>

<script>
export default {
  name: "UserPane",
  data() {
    return {
      messages: this.selectedConversation.messages
      }
    },
    computed: {
      selectedConversation() {
        return this.$store.state.activeConversation
      },
      selectedMessages() {
        return this.$store.state.activeConversation.messages
      }
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
    padding-bottom: 20rem;
  }
  #msg {
    margin: 0.5rem 2rem;
    width: 75%;
    padding: 0.5rem 0.5rem 0.5rem;
    border-radius: 0.5rem;    
  }
  #spacebar {
    min-height: 1rem;
  }
</style>