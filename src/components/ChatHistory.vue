<template>
  <div id="msg-container" class="text-left d-flex flex-column border">
    <div id="msg" v-for="(msg, index) in messages" :key="index">
      {{msg}}
    </div>
    
  </div>
</template>

<script>
export default {
  name: "UserPane",
  data() {
    return {
      messages: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor interdum dolor vel imperdiet. Proin arcu dolor, pellentesque efficitur porttitor eu, posuere sed ante.",
        "Phasellus placerat libero ullamcorper risus mollis, a mollis mauris tincidunt.",
        "Vestibulum laoreet, sapien ac accumsan semper, purus lorem commodo tortor, et dignissim dolor ex ut sem",
        "Cras placerat sit amet sapien ac dictum. Sed auctor tristique velit vitae ultrices. Curabitur venenatis lobortis ex, ut maximus sem tincidunt eu.",
        "Phasellus feugiat leo non quam porta dignissim.",
        "Ut vulputate tincidunt mauris, ut gravida massa imperdiet vel.",
        "Nam accumsan mollis elit, et mattis neque pellentesque eu. Aenean non vehicula ante."
      ]
      }
    }
  
};
</script>
<style scoped>
  #msg-container {
    overflow: auto;
    background-color: thistle;
    height: 75%;
    flex: 1 1 0;
    position: relative;
    order: 2;
  }
  #msg {
    margin: 0.75rem 2rem;
    width: 75%;
    border: 1px solid #dee2e6 ;
    padding: 0.75rem 0.5rem;
    border-radius: 0.5rem;
    background-color: white;
  }
</style>