<template>
  <div id="user-preferences">
    <br/>
    <LineGraph v-bind:history="history"></LineGraph>
    <br/>
    <div class="next">
      <div class="preferences">
        <h1>Preferences</h1>
        <br/>
        <div v-for="p in preferences" v-bind:key="p[0]">
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
        <div v-for="m in mask" v-bind:key="m[0]">
          <div class="item">
            Topic: <strong>{{m[0]}}</strong>
            <br/>
            {{m[1] == 0? "Not Seen" : "Seen"}}
            <br/>
            Times Seen: {{m[1]}}
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
import LineGraph from "./LineGraph.vue";

export default {
  name: "MyPreferences",

  components: {
    Snackbar,
    LineGraph
  },

  data() {
    return {
      preferences: [],
      mask: [],
      history: [],
      userName: this.$cookie.get('auth'),
    };
  },
  created: function() {
    this.retriveProfile()
  },
  methods: {
    retriveProfile: function() {
      axios
        .get(`http://localhost:5000/user/profile/${this.userName}`, {})
        .then((res) => {
          this.preferences = res.data.vector
          this.mask = res.data.mask
          this.history = res.data.history
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