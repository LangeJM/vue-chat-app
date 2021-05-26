<template>
  <div >
    <!-- <h3 class="p-2">Chat History</h3> -->
    <h3 >{{headerTitle}}</h3>
  </div>
</template>

<script>
export default {
  name: "ChatHeader",
  props: ["headerTitle"],
  
  
};
</script>
<style scoped>
 div {
   text-align: left;
   display: flex;
   border: 1px solid #dee2e6;
   margin: 0;
   background-color: #f8f9fa;
   position: relative;
   min-height: 60px;
   z-index: 1000;
 }
 h3 {
   padding: 0.5rem;
   margin: 0;
   display: flex;
   align-items: center;
 }
  
</style>