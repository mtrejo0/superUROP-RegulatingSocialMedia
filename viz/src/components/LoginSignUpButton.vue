<template>
  <div>
    <div class="button-router">
      <router-link to="/account" class="router-link" style="text-decoration: none; color: inherit;">
        <span v-if="userName">
          Hi {{userName}}!
        </span>
        <span v-else>
          Log In / Sign Up
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: "LoginSignUpButton",
    data() {
      return {
        userName: this.$cookie.get('fritter-auth')
      }
    }
}
</script>