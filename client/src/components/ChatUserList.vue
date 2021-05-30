

<template>
  <div class="text-left d-flex flex-column border h-100 pt-3">
    <div v-for="(user, index) in users" :key="index"  :style="[user.selected ? {'background': 'rgba(148, 198, 231, 0.244)'} : {'background': ''}]" class="px-3 py-2 border-bottom pb-1 d-flex justify-content-between" >
      <div v-on:click="selectUser">{{user.email}}</div>
      <div id=onlineCircle :style="[user.online ? {'background': 'rgb(54, 221, 82)'} : {'background': 'rgb(202, 199, 199)'}]" ></div>
    </div>
    <!-- {{map.users(user => <div class="mx-3 mb-1 border-bottom">user</div>)}} -->
    
  </div>
</template>

<script>
export default {
  name: "ChatUserList",
  data () {
    return {
      usersHardCoded: ["Alexander", "Horst-Peter", "Hashmonai", "Gal"]}
  },
  computed: {
    users() {
      return this.$store.state.userList
    }
  },
  mounted() {
    this.$store.dispatch("getUserList");
  },
  methods: {
    selectUser(event){
      console.log(event.target.innerHTML)      
    },
  }, 
};

</script>

<style scoped>
  #onlineCircle {
    border-radius: 50%;
    width:1rem;
    height: 1rem;
    margin-right: 0.5rem;
    background-color: rgba(148, 198, 231, 0.644);
    

  }
</style>
