<template>
  <div id="chat-message-container">
    <!-- <textarea id="chat-message" v-model="msg" placeholder="Type a message" ></textarea> -->
    <div id="chat-message" data-ph="Type a message" contentEditable="true" >{{msg}}</div>
    <font-awesome-icon icon="paper-plane" size="2x" class="" />
  </div>
</template>

<script>
export default {
  name: "ChatComposer",
  data() {
    return {
      msg: ''
      }
    }
  
};
  
</script>
<style lang="scss">
[contentEditable=true]:empty:not(:focus):before{content:attr(data-ph)}
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