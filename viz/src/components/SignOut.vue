<template>
  <div id="sign-out" class="component">
    <input type='submit' value='Sign Out' class="button" v-on:click="signOut">
  </div>
</template>

<style scoped>
  .delete {
    background: red;
  }
</style>

<script>
import axios from "axios";
import { eventBus } from "../main";

export default {
  name: "SignOut",
  data() {
    return {userName: this.$cookie.get('fritter-auth')}
  },
  methods: {
    signOut: function() {
      axios.post('api/users/signout')
        .then(() => {
          // handle success
          eventBus.$emit('signout-success', true);
        })
        .catch(() => {
          // Still sign User out so they have to sign in again.
          eventBus.$emit('signout-success', true);
        })
    },
    deleteAccount: function() {
      axios.delete('api/users')
        .then(() => {
          eventBus.$emit('delete-success', true);
        })
        .catch(() => {
          eventBus.$emit('delete-error', true);
        })
    }
  }
}
</script>
