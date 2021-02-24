<template>
  <div>
    <Navbar/>
    
    <div class="feeds">
      <div class="feed">
        <p>Your feed:</p>
        <div class="tweets">
          <Tweet :tweet="tweet" v-for="tweet in data" :key="tweet.text" class="tweet"/>
        </div>
      </div>
      <div class="feed">
        <p>Recommended feed:</p>
        <div class="tweets">
          <Tweet :tweet="tweet" v-for="tweet in data" :key="tweet.text" class="tweet"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .feeds {
    display: flex;
  }

  .feed {
    margin: 32px;
  }
</style>

<script>
import Navbar from "../components/Navbar.vue";
import Tweet from "../components/Tweet.vue";
import sports from '../../../matrix_estimation/sports.json'

export default {
  name: "Main",
  components: {
    Navbar,
    Tweet
  },
  data() {
    return {
      data: sports
    }
  }
};
</script>
