<template>
  <div id="user-preferences">
    <h1>Preferences</h1>
    <br/>
    <pre>{{preferences}}</pre>
    <h1>Mask</h1>
    <br/>
    <pre>{{mask}}</pre>
  <Snackbar />
  </div>
</template>

<script>
import axios from "axios";
import Snackbar from "./Snackbar.vue";

export default {
  name: "MyPreferences",

  components: {
    Snackbar,
  },

  data() {
    return {
      preferences: [],
      mask: [],
      userName: this.$cookie.get('auth'),
    };
  },
  created: function() {
    this.retrivePreferences()
    this.retriveMask()
  },
  methods: {
    retrivePreferences: function() {
      axios
        .get(`http://localhost:5000/user/vec/${this.userName}`, {})
        .then((res) => {
          this.preferences = res.data
        })
        .catch(err => {
          this.errors.push(err);
        })
        .then(() => {

        })
    },
    retriveMask: function() {
      axios
        .get(`http://localhost:5000/user/mask/${this.userName}`, {})
        .then((res) => {
          this.mask = res.data
        })
        .catch(err => {
          this.errors.push(err);
        })
        .then(() => {

        })
    }
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