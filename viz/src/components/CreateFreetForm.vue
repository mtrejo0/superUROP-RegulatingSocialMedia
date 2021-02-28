<template>
  <div class="subcontainer">
    <div class="short-form-container">
      <!-- the submit event will no longer reload the page -->
      <form id='create-short' v-on:submit.prevent='createShort' method='post'>

        <input id='name' v-model.trim='body' type='text' name='body'  placeholder="Whats happening?">
        
        <input type='submit' value="Create Freet" id="createFreet" class="button">

        <div v-if='success' class="success-message">
          {{ success }}
        </div>

        <div v-if='errors.length' class="error-message">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for='error in errors' v-bind:key='error.id'>{{ error }}</li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { eventBus } from "../main";

export default {
  name: "CreateFreetForm",

  data() {
    return {
      errors: [],
      success: "",
      body: "",
    };
  },

  methods: {
    createShort: function() {
      this.errors = [];

      if (this.freetText === "") {
        this.errors.push("Freet cannot be empty!");
        this.clearMessages();
      } else {
        const bodyContent = { 
          body: this.body, 
          username: this.$cookie.get('fritter-auth')
          };
        axios
          .post("/api/freets", bodyContent)
          .then(freet => {
            // handle success
            this.success = "Freet created successfully!";
            this.body = ''
            eventBus.$emit("create-freet-success", freet);
          })
          .catch(err => {
            // handle error
            this.errors.push(err.response.data.message);
          })
          .then(() => {
            // always executed
            this.resetForm();
            this.clearMessages();
          });
      }
    },

    resetForm: function() {
      this.shortName = "";
      this.url = "";
    },

    clearMessages: function() {
      setInterval(() => {
        this.errors = [];
        this.success = "";
      }, 5000);
    }
  }
};
</script>
