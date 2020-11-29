<template>
  <div>
    <Navbar/>
    <div class="tweets">
      <Tweet :tweet="tweet" v-for="tweet in data" :key="tweet.text" class="tweet"/>
    </div>
  </div>
</template>

<style scoped>
  .tweets {
    margin: 32px
  }
</style>

<script>
import Navbar from "../components/Navbar.vue";
import Tweet from "../components/Tweet.vue";
import sports from '../../../matrix_estimation/sports.json'

export default {
  name: "Main",
  data() {
    return {
      data: sports
    }
  },
  components: {
    Navbar,
    Tweet
  }
};
</script>
