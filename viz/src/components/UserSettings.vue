<template>
  <div id="user-settings">
    <div class="form-container">
      <p>Please sign in or sign up a new account to continue</p>
      <UserAuthentication />
    </div>
  <Snackbar />
  </div>
</template>

<script>
import SignOut from "./SignOut.vue";
import UserAuthentication from "./UserAuthentication.vue";
import Snackbar from "../components/Snackbar.vue";

import { eventBus } from "../main";

export default {
  name: "UserSettings",

  components: {
    SignOut,
    UserAuthentication,
    Snackbar,
  },

  data() {
    return {
      messages: []
    };
  },

  created: function() {
    eventBus.$on("signin-success", (userName) => {
      this.$cookie.set('auth', userName);
      localStorage.setItem('auth', userName);
    });
    
    eventBus.$on("signout-success", () => {
      this.$cookie.set('auth', '');
      localStorage.removeItem('auth');
      this.messages.push("You have been signed out!");
    });

    eventBus.$on("signup-success", () => {
      this.messages.push("You have been signed up! Sign in to continue.");
    });
    
    eventBus.$on("recommend-signup-success", () => {
      this.messages.push("You have been signed up for recommendation");
    });
  },
  watch: {
    messages: {
      deep: true,
      handler() {
        if (this.messages.length) {
          const newMsg = this.messages[this.messages.length-1];
          this.$store.commit('push', newMsg);
        }
      }
    },
  }
};
</script>