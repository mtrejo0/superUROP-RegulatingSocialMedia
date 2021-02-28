<template>
  <div id="user-settings">
    <div v-if="isSignedIn" class="form-container">
      <h1> Hi {{this.$cookie.get('fritter-auth')}}! </h1>
      <ChangeUsername/>
      <ChangePassword/>
      <SignOut/>
      <DeleteUser/>
    </div>
    <div v-else class="form-container">
      Welcome to Fritter! Please sign in or sign up.
      <SignIn/>
      <SignUp/>
    </div>
    <div v-if='messages.length' class="success-message" style="text-align:center;">
      <div v-for='message in messages' v-bind:key='message.id'>{{ message }}</div>
    </div>
  </div>
</template>

<script>
import SignIn from "./SignIn.vue";
import SignOut from "./SignOut.vue";
import DeleteUser from "./DeleteUser.vue";
import SignUp from "./SignUp.vue";
import ChangePassword from "./ChangePassword.vue";
import ChangeUsername from "./ChangeUsername.vue";
import { eventBus } from "../main";
import axios from "axios";

export default {
  name: "UserSettings",

  components: {
    SignIn,
    SignOut,
    SignUp,
    ChangePassword,
    ChangeUsername,
    DeleteUser
  },

  data() {
    return {
      isSignedIn: false,
      messages: []
    };
  },

  created: function() {
    let authenticated = this.$cookie.get('fritter-auth');
    if (authenticated) {
      this.isSignedIn = true;
    }

    eventBus.$on("signin-success", (userName) => {
      this.$cookie.set('fritter-auth', userName);

      axios
        .get(`/api/users/${userName}`)
        .then((res) => {
          this.$cookie.set('fritter-auth-id', res.data.user_id);
        })
        .catch(err => {
          // handle error
          this.messages.push(`Did not get user_id ${err}`);
        })

      this.isSignedIn = true;
      this.messages.push("You have been signed in!");
      this.clearMessages();
    });

    eventBus.$on("changePassword-success", () => {
      this.messages.push("You have changed your password!");
      this.clearMessages();
    });

    eventBus.$on("changeUsername-success", (userName) => {
      this.$cookie.set('fritter-auth', userName);
      this.messages.push("You have changed your username!");
      this.clearMessages();
    });
    
    eventBus.$on("signout-success", () => {
      this.$cookie.set('fritter-auth', '');
      this.$cookie.set('fritter-auth-id', '');
      this.isSignedIn = false;
      this.messages.push("You have been signed out!");
      this.clearMessages();
    });
    eventBus.$on("deleteUser-success", () => {
      this.messages.push("You have deleted your user!");
      this.clearMessages();
    });

    eventBus.$on("delete-success", () => {
      this.$cookie.set('fritter-auth', '');
      this.isSignedIn = false;
      this.messages.push("Your account has been deleted!");
      this.clearMessages();
    });

    eventBus.$on("delete-error", () => {
      this.messages.push("Your account wasnt deleted properly");
      this.clearMessages();
    });

    eventBus.$on("signup-success", () => {
      this.messages.push("You have been signed up! Sign in to continue.");
      this.clearMessages();
    });
  },
  methods: {
    clearMessages: function() {
      setInterval(() => {
        this.messages = [];
      }, 5000);
    }
  }
};
</script>