<template>
  <div>
    <div class="search-bar">
      <input type="search" v-model.trim='user' class="search"/>
      <form class="button-router">
        <div v-if='this.user.length == 0'>
          <router-link :to="'' + this.user" class="router-link" style="text-decoration: none; color: inherit;">
          Search User
          </router-link>
        </div>

        <div v-else>
          <router-link :to="'/accounts/' + this.user" class="router-link" style="text-decoration: none; color: inherit;">
          Search User
          </router-link>
        </div>
    </form>
    </div>
  </div>
</template>

<script>
export default {
    name: "SearchUser",
    data() {
    return {
      errors: [],
      user: ""
    }
  }
  
}
</script>