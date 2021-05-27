<template>
  <div>
    <hero />
    <hr />
    <home-content />
  </div>
</template>

<script>
import Lytics from "../components/Lytics";
import HomeContent from "../components/HomeContent";

export default {
  name: "Analytics",
  components: {
    Lytics,
    HomeContent
  }
};
</script>

<style lang="scss" scoped>
.next-steps {
  .fa-link {
    margin-right: 5px;
  }
}
</style>
