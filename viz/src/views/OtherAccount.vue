<template>
  <div>
    <Navbar/>
    <div v-if='errors.length' class="error-message">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for='error in errors' v-bind:key='error.id'>{{ error }}</li>
      </ul>
    </div>
    <div v-if='isFound' class="container" style="text-align: center;">
      <h1> Welcome To {{this.user}}'s Profile! </h1>
      <Follow v-bind:otherUser="this.user"/>
      <div v-if='messages.length' class="success-message" style="text-align:center;">
        <div v-for='message in messages' v-bind:key='message.id'>{{ message }}</div>
      </div>
      <div v-if="userData.length">
        <Freet
          v-for="freet in userData.slice().reverse()"
          v-bind:key="freet.post_id"
          v-bind:freet="freet"
        />
      </div>
      <div v-else>
        <p style="text-align: center;">There are no freets to display.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import Freet from "../components/Freet";
import Follow from "../components/Follow";
import { eventBus } from "../main";

export default {
  name: "accounts",
  props: ['user'],
  data() {
    return {
      errors: [],
      messages: [],
      userData: [],
      isFound: false,
      isLoggedin: false
    }
  },
  watch: {
    user: {
      immediate: true,
      handler() {
        this.errors = [];
        this.isFound = false;
        axios.get('/api/freets/' + this.user)
        .then(response => {
          // handle success
          this.userData = response.data.freets;
          this.isFound = true;
        })
        .catch(() => {
          // handle error
          this.errors.push("Could not find username. Check the username and try again.");
        })
      }
    }
  },
  components: {
    Navbar,
    Freet,
    Follow
  },
  created: function() {
    let authenticated = this.$cookie.get('fritter-auth');
    if (authenticated) {
      this.isLoggedin = true;
    }
    eventBus.$on("follow-success", () => {
      this.messages.push("You have followed " + this.user + "!");
      this.clearMessages();
    });

    eventBus.$on("like-freet-success", res => {
      this.messages.push(`Succesfully liked freet ${JSON.parse(res.config.data).id}`);
      this.clearMessages();
      this.loadFreets();
    });

    eventBus.$on("like-freet-error", () => {
      this.error = `ERROR: could like freet! Check your permissions and try again.`;
      this.clearMessages();
      this.loadFreets();
    });

    eventBus.$on("refreet-freet-success", res => {
      this.success = `Succesfully refreeted freet ${JSON.parse(res.config.data).id}`;
      this.clearMessages();
      this.loadFreets();
    });

    eventBus.$on("refreet-freet-error", () => {
      this.error = `ERROR: could not refreet! Check your permissions and try again.`;
      this.clearMessages();
      this.loadFreets();
    });

    eventBus.$on("edit-freet-success", res => {
      this.success = `Succesfully edited freet ${JSON.parse(res.config.data).id}`;
      this.clearMessages();
      this.loadFreets();
    });

    eventBus.$on("edit-freet-error", () => {
      this.error = `ERROR: could not edit freet! Check your permissions and try again.`;
      this.clearMessages();
      this.loadFreets();
    });

    eventBus.$on("create-freet-success", (res) => {
      this.messages.push(`New freet ${JSON.stringify(res.data.freet.post_id)} succesfully added!`);
      this.clearMessages();
      this.loadFreets();
    });

    eventBus.$on("delete-freet-success", res => {
      this.messages.push(`Freet ${res.post_id} has been deleted`);
      this.clearMessages();
      this.loadFreets();
      this.$forceUpdate();
    });

    eventBus.$on("delete-freet-error", res => {
      this.errors.push(`Freet ${res.post_id} has not been deleted`);
      this.clearMessages();
      this.loadFreets();
    });

    this.loadFreets();
  },

  methods: {
    loadFreets: function() {
      axios.get("/api/freets/" + this.user).then(response => {
        this.userData = response.data.freets;
      });
    },
    clearMessages: function() {
      setInterval(() => {
        this.messages = []
        this.errors = []
      }, 5000);
    }
  }
};
</script>
