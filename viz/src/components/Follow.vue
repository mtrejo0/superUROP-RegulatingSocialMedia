<template>
  <div>
    <div id="follow" class="component">
      <input type='submit' value='Follow' class="button" v-on:click="follow">
    </div>
    <div v-if='errors.length' class="error-message">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for='error in errors' v-bind:key='error.id'>{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import axios from "axios";
import { eventBus } from "../main";

export default {
  name: "Follow",
  props: ['otherUser'],
  data() {
    return {
      errors: []
    }
  },
  methods: {
    follow: function() {
      const bodyContent = { username: this.$cookie.get('fritter-auth') , otherUser: this.otherUser};
      axios.post('/api/actions/follow', bodyContent)
        .then((req) => {
          // handle success
          eventBus.$emit('follow-success', req);
        })
        .catch(err => {
            // handle error
            this.errors.push(err.response.data.message);
          })
        .then(() => {
          // always executed
          this.clearMessages();
        });
    },
    clearMessages: function() {
      setInterval(() => {
        this.errors = [];
      }, 5000);
    }
  }
}
</script>
