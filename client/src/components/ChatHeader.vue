<template>
  <div id="chat-header-style">
    <div v-if="smallerFont">
      <div id="smaller-font01">{{headerTitle.given_name ? headerTitle.given_name : headerTitle.email}}</div>
      <div id="smaller-font02">{{headerTitle.given_name ? headerTitle.email: ""}}</div>
    </div>
    <h3 v-else>{{headerTitle}}</h3>
  </div>
</template>

<script>
export default {
  name: "ChatHeader",
  props: ["headerTitle", "smallerFont"],
  
  
};
</script>
<style scoped>
 #chat-header-style {
   text-align: left;
   display: flex;
   border: 1px solid #dee2e6;
   margin: 0;
   background-color: #f8f9fa;
   position: relative;
   height: 4rem;
   min-height: 8%;
   padding: 0.5rem;
   
 }
 h3, h5 {
   padding: 0.5rem;
   margin: 0;
   display: flex;
   align-items: center;
 }
 #smaller-font01 {
   color: rgba(11, 130, 194, 1);
   font-weight: bold;
   font-size: larger;
 }
 #smaller-font02 {
   color: rgba(11, 130, 194, 1);
   font-size: smaller;
 }
</style>