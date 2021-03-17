<template>
  <div id="user-preferences">
    <div class="next">
      <div class="preferences">
        <h1>Preferences</h1>
        <br/>
        <div v-for="p in preferences" v-bind:key="p">
          <div class="item">
            Topic: <strong>{{p[0]}}</strong>
            <br/>
            {{p[1]*100}}%
          </div>
        </div>
      </div>
      <div>
        <h1>Mask</h1>
        <br/>
        <div v-for="m in mask" v-bind:key="m">
          <div class="item">
            Topic: <strong>{{m[0]}}</strong>
            <br/>
            {{m[1]}}
          </div>
        </div>
      </div>
    </div>
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
          this.preferences = res.data.preferences
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
          this.mask = res.data.mask
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

<style scoped>
  .item {
    padding: 32px;
    margin: 16px;
    box-shadow: 0 0 12px 6px #eee;
    border-radius: 32px;

  }
  .preferences {
    margin-right: 64px;
  }
  .next {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>