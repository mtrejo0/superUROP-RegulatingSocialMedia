<template>
  <div class="wrapper">
    <p>{{tweet.text}}</p>
    <p>{{tweet.created_at}}</p>
    <p>Likes: {{tweet.public_metrics.like_count}}</p>
    <p>Retweets: {{tweet.public_metrics.retweet_count}}</p>
  </div>
</template>

<style scoped>
  .wrapper {
    padding: 32px;
    border-radius: 32px;
    box-shadow: 0px 0px 12px 6px #eee;
    margin-bottom: 16px;
  }
  .button {
    margin-left: 32px;
  }
</style>

<script>


export default {
  name: "Tweet",

  props: {
    tweet: Object,
  },
};
</script>
