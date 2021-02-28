<template>
  <div>
   <div id="delete-user" class="component">
    <input type='submit' value='Delete User' class="button" v-on:click="deleteUser">
  </div>
    <div v-if='errors.length' class="error-message" style="width: 250px;">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for='error in errors' v-bind:key='error.id'>{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { eventBus } from "../main";

export default {
  name: "DeleteUser",

  data() {
    return {
      errors: []
    }
  },

  methods: {
    deleteUser: function() {
      axios.delete('api/users/')
        .then(() => {
          // handle success
          eventBus.$emit('deleteUser-success', true);
          eventBus.$emit('signout-success', true);
        })
        .catch((err) => {
          // Still sign User out so they have to sign in again.
          this.errors.push(err.response.data.message);
        })
    },

    clearMessages: function() {
      setInterval(() => {
        this.errors = [];
      }, 5000);
    }
  }
}
</script>

<style scoped>
.form-group {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

label {
  margin-right: 0.5rem;
}

form {
  width: fit-content;
}

input[type="text"],
input[type="url"] {
  width: 15rem;
}
</style>