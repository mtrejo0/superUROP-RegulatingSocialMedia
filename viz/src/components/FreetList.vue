<template>
  <div class="container center">
      <div v-if='success' class="success-message">
        {{ success }}
      </div>
      <div v-if='error' class="error-message">
        {{ error }}
      </div>
      <div class="freet-container" style="text-align: center;">  
        <div v-if="freets.length">
          <Freet
            v-for="freet in freets.slice().reverse()"
            v-bind:key="freet.post_id"
            v-bind:freet="freet"
          />
        </div>
        <div v-else>
          <p style="text-align: center;">There are no freets to display. Create one today!</p>
        </div>
      </div>
  </div>
</template>

<style scoped>
  .center {
    text-align: center;
  }
</style>


<style scoped>
    .freet-container {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1em;
        padding: 32px; 
    }
    
</style>

<script>
import Freet from "./Freet";
import axios from "axios";

import { eventBus } from "../main";

export default {
  name: "FreetList",

  components: { Freet },
  props: ['allFreets'],
  data() {
    return {
      freets: [],
      success: "",
      error: ""
    };
  },

  created: function() {

    eventBus.$on("like-freet-success", res => {
      this.success = `Succesfully liked freet ${JSON.parse(res.config.data).id}`;
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
      this.success = `New freet ${JSON.stringify(res.data.freet.post_id)} succesfully added!`;
      this.clearMessages();
      this.loadFreets();
    });

    eventBus.$on("delete-freet-success", res => {
      this.success = `Freet ${res.post_id} has been deleted`;
      this.clearMessages();
      this.loadFreets();
    });

    eventBus.$on("delete-freet-error", res => {
      this.error = `Freet ${res.post_id} has not been deleted`;
      this.clearMessages();
      this.loadFreets();
    });

    this.loadFreets();
  },

  methods: {
    loadFreets: function() {
      let url = '/api/freets'
      if (!this.allFreets) {
        url = '/api/freets/feed'
      }
      axios.get(url).then(response => {
        this.freets = response.data.freets;
      })
    },
    clearMessages: function() {
      setInterval(() => {
        this.success = "";
        this.error = "";
      }, 5000);
    }
  }
};
</script>

