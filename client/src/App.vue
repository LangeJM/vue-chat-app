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
  created() {
    setTimeout(() => {
      this.$store.commit('setActiveUser', this.$auth.user)
    }, 1500);
    console.log(`Active User: ${this.$auth.user.email}`)
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