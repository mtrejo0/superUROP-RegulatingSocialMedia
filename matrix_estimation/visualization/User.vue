<template>
  <div>
      <p>{{value}}</p>
  </div>
</template>

<style scoped>
    .border {
        border: 1px black solid
    }
</style>

<script>

export default {
  name: "User",
  data() {
    return {
        value: Math.random()
    };
  },
};
</script>
