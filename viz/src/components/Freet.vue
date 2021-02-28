<template>
  <div class="freet-container">
    <p><strong>{{freet.username}}</strong></p>
    <p v-if="freet.refreet_id > 0"> <strong>refreet:</strong> <i>{{freet.body}}</i></p>
    <p v-else> <i>{{freet.body}}</i></p>

    <input v-if="editing" id='name' v-model.trim='editText' type='text' name='editText'  placeholder="New freet body">
    
    <div class="freet-buttons">
      <div class="freet-button" v-if="!(freet.refreet_id > 0)">
        <p>{{freet.likes.length}}</p>
        <button v-if="!liked" class="button" v-on:click="likeFreet"> Like </button>
        <button v-else disabled class="button faded" > Liked </button>
      </div>
      {{' '}}
      <div>
        <p>{{freet.refreets.length}}</p>
        <button v-if="!retweeted" class="button" v-on:click="refreet"> Refreet </button>
        <button v-else disabled class="button faded"> Refreeted </button>
      </div>
    </div>

    <div class="freet-buttons" v-if='owner'>
      <button class="button freet-button" v-on:click="editFreet" v-if="!(freet.refreet_id > 0) && !editing"> Edit </button>
      <button class="button freet-button" v-on:click="submitEdit" v-else-if="editing"> Save </button>
      <button class="button warning" v-on:click="deleteFreet"> Delete </button>
    </div>
    
  </div>
</template>

<style scoped>
    .freet-container {
        font-family: Arial, Helvetica, sans-serif;
        font-size:1em;
        display: inline-block;
        margin: 16px;
        border-radius: 32px;
        box-shadow: 0px 0px 12px 6px #eee;
        width: 50vw;
        padding: 32px;
    }
    .faded {
      background: black;
    }
    .freet-buttons {
      margin-top: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .freet-button {
      margin-right: 32px;
    }

    .warning {
      background:crimson;
    }

</style>

<script>
import axios from "axios";
import { eventBus } from "../main";

export default {
  name: "Freet",
  props: {
    freet: Object
  },
  data() {
    return {
        owner: this.$cookie.get('fritter-auth') == this.freet.username,
        liked: this.hasLiked(),
        retweeted: this.hasRefreeted(),
        editing: false,
        editText: ""
    };
  },

  methods: {
    hasLiked: function() {
      let liked = false;
      for(let i = 0 ; i < this.freet.likes.length; i++){
        if (this.$cookie.get('fritter-auth-id') == this.freet.likes[i].user_id) {
          liked = true;
        }
      }
      return liked
    },
    hasRefreeted: function() {
      let refreeted = false;
      for(let i = 0 ; i < this.freet.refreets.length; i++){
        if (this.$cookie.get('fritter-auth-id') == this.freet.refreets[i].creator) {
          refreeted = true;
        }
      }
      return refreeted
    },
    likeFreet: function() {
        const body = { id: this.freet.post_id };
        axios
          .post(`/api/actions/likes`, body)
          .then((res) => {
            // handle success
            this.liked = true
            eventBus.$emit("like-freet-success", res);
          })
          .catch(err => {
            // handle error
            eventBus.$emit("like-freet-error", err);
          })
    },
    refreet: function() {
        const body = { id: this.freet.post_id };
        axios
          .post(`/api/actions/refreet`, body)
          .then((res) => {
            // handle success
            this.retweeted = true
            eventBus.$emit("refreet-freet-success", res);
          })
          .catch(err => {
            // handle error
            eventBus.$emit("refreet-freet-error", err);
          })
    },
    editFreet: function() {
      this.editing = true;
    },
    submitEdit: function() {
      this.editing = false;
      const body = { id: this.freet.post_id , content: this.editText};
        axios
          .put(`/api/freets`, body)
          .then((res) => {
            // handle success
            eventBus.$emit("edit-freet-success", res);
          })
          .catch(err => {
            // handle error
            eventBus.$emit("edit-freet-error", err);
          });
    },
    deleteFreet: function() {
      axios
        .delete(`/api/freets/${this.freet.post_id}`, {})
        .then(() => {
          eventBus.$emit("delete-freet-success", this.freet);
        })
        .catch(err => {
          eventBus.$emit("delete-freet-error", err);
        })
    }
  }
};
</script>
