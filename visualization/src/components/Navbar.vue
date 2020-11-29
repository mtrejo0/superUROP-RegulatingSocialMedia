<template>
  <div class="nav">
    <div>
      <router-link to="/">
        <button v-bind:class="{ selected: $route.name  == 'main'}" class="button nav-button">Home</button>
      </router-link>
      <router-link to="/all">
        <button v-bind:class="{ selected: $route.name  == 'all'}" class="button nav-button">All Tweets</button>
      </router-link>
      <router-link to="/account">
        <button v-bind:class="{ selected: $route.name  == 'account'}" class="button nav-button">Account</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .nav-button {
    margin: 16px;
  }
  .selected {
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border: 2px black solid
  }
</style>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      userName: this.$cookie.get('url-shortener-auth')
    }
  },
};
</script>


