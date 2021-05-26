

<template>
  <div class="text-left d-flex flex-column border h-100">
    <div v-for="(user, index) in users" :key="index" class="mx-3 mb-1 border-bottom">
      {{user}}
    </div>
    <!-- {{map.users(user => <div class="mx-3 mb-1 border-bottom">user</div>)}} -->
    
  </div>
</template>

<script>
export default {
  name: "ChatUserList",
  data () {
    return {
      users: ["Alexander", "Horst-Peter", "Hashmonai", "Gal"]}
  }
};

</script>
