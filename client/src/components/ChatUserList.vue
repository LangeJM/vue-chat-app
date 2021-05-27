

<template>
  <div class="text-left d-flex flex-column border h-100 pt-3">
    <div v-for="(user, index) in users" :key="index" class="mx-3 my-2 border-bottom pb-1">
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
