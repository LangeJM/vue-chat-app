<template>
  <div id="app" class="d-flex flex-column h-100">
    <nav-bar />
    <div class="container flex-grow-1 h-100">
      <error />
      <div class="mt-5 h-100">
        <router-view />
      </div>
    </div>
    <footer class="bg-light text-center p-3 d-flex justify-content-center align-items-center">
      <p>
        <span>Vue</span>View App on 
        <a href="https://github.com/LangeJM/vue-chat-app">Github</a>
      </p>
    </footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Error from "./components/Error";

export default {
  components: {
    NavBar,
    Error
  },
  async updated() {
      this.$store.commit('setActiveUser', this.$auth.user)
      // console.log(`Auth Email after update: ${this.$auth.user.email}`)
      // console.log(`Active User email after update: ${this.$store.state.user.email}`)
      // console.log(`Previous Active User email after update: ${this.$store.state.previousUser.email}`)
      if (this.$store.state.user.email && this.$store.state.previousUser.email === undefined) {
        try {
          await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({email: this.$store.state.user.email})
          });
          this.$store.dispatch("getUserList");
          
        } catch (error) {
          console.log(error);
        }
      }     
  },
};
</script>

<style scoped>
  span {
    text-decoration: line-through;
  }
  p {
    margin: 0
  }
</style>