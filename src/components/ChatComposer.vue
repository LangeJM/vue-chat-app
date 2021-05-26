<template>
  <div id="chat-message-container">
    <!-- <div id="chat-message" data-ph="Type a message" contentEditable="true" v-on:change="onChange">{{chatMessage}}</div> -->
    <textarea id="chat-message" placeholder="Type a message" @change="onChange" :value="chatMessage" />
    <font-awesome-icon icon="paper-plane" size="2x" v-on:click="$emit('get-message')" />
  </div>
</template>

<script>
export default {
  name: "ChatComposer",
  data() {
    return {
      msg: ''
      }
    },
  methods: {
    onChange (e) {
      this.$emit('updateMessage', e.target.value)
      
    },
    alert(msg) {
      alert(msg)
    }
  },
  props: ['chatMessage'],
  
};
  
</script>
<style lang="scss">
/*
[contentEditable=true]:empty:not(:focus):before{content:attr(data-ph)} 
This is for the div version to simulate textarea behaviour 
*/
#chat-message-container {
  min-height: 60px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  order: 3;
  position: relative;
  min-height: 60px;
  border: 1px solid #dee2e6;
}

#chat-message {
  width: 75%;
  border: grey;
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: white;     
}
</style>