<template>
  <div class="inner-container">
    <Navbar/>
    <div class='recommend'>
        <Titlebar title="Recommend"/>
    </div>
    <div class="freets-container" v-if="freets.length">
        <Freet
          v-for="freet in orderedFreets"
          v-bind:key="freet.id"
          v-bind:id="freet.id"
          v-bind:content="freet.content"
          v-bind:author="freet.author"
          v-bind:og_author="freet.og_author"
          v-bind:time="freet.time"
          v-bind:upvotes="freet.upvotes"
          v-bind:refreets="freet.refreets"
          v-bind:refreetAuthors="freet.refreets.map(refreet => refreet.author)"
        />
      <Modal
        v-if="isModalVisible"
        v-bind:freetId ="this.placeholderId"
        v-bind:oldContent="this.placeholderContent"
        @modal-close="closeModal"
      />
      <Snackbar />
  </div>
  <div v-else>
      <EmptyPage text="There is nothing here yet! Once you or users you follow create a Freet, they will show up here" /> 
  </div>
</div>

</template>

<script>
import axios from "axios";
import { eventBus } from "../main";
import Freet from "../components/Freet.vue";
import Navbar from "../components/Navbar.vue";
import Titlebar from "../components/Titlebar.vue";
import Modal from "../components/Modal.vue";
import Snackbar from "../components/Snackbar.vue";
import EmptyPage from "../components/EmptyPage.vue";

import _ from 'lodash';

export default {
  name: "Recommend",
  data() {
    return {
        messages: [],
        errors: [],
        freetContent: "",
        freets: [],
        isModalVisible: false,
        placeholderContent: "",
        placeholderId: "",
        snackMsg: "",
        userName: this.$cookie.get('auth')
    }    
  },
  created() {
    this.freets = [];
    this.retriveFreets();
    eventBus.$on("upvote-success", (currId, currUpvotes) => {
      let upvotedFreet = this.freets.filter(freet => freet.id == currId)
      if (upvotedFreet.length) {
        upvotedFreet[0].upvotes = currUpvotes;
      }
    });
    eventBus.$on("undo-upvote-success", (currId, currUpvotes) => {
      let upvotedFreet = this.freets.filter(freet => freet.id == currId);
      if (upvotedFreet.length) {
        upvotedFreet[0].upvotes = currUpvotes;
      }
    });
    eventBus.$on("refreet-success", (newFreet, currId) => {
      this.freets.push(newFreet);
      let refreetedFreet = this.freets.filter(freet => freet.id == currId);
      if (refreetedFreet.length) {
        let refreetAuthors = refreetedFreet[0].refreets.map(refreet => refreet.author);
        if (!refreetAuthors.includes(newFreet.author)) {
          refreetedFreet[0].refreets.push(newFreet);
        }
        const snackMsg = "Successfully refreeted";
        this.messages.push(snackMsg);
      }
    });
    eventBus.$on("delete-freet-success", (currId) => {
      // this.messages.push("Deleted Freet: " + currId);
      this.freets = this.freets.filter(freet => freet.id != currId);
      // we do not need to delete all refreets pertaining to the deleted freet
      // this.freets.forEach(freet => freet.refreets = freet.refreets.filter(refreet => refreet.id != currId));
      const snackMsg = "Freet deleted successfully.";
      this.messages.push(snackMsg);
    });
    eventBus.$on("show-modal", (freetId, currContent) => {
      this.placeholderId = freetId;
      this.placeholderContent = currContent; 
      this.showModal();
    });
    eventBus.$on("modal-update-freet", (freetId, newContent) => {
      this.updateFreet(freetId, newContent);
    });
  },
  computed: {
    orderedFreets: function () {
      return _.orderBy(this.freets, 'time', 'desc')
    },
  },
  methods: {
    retriveFreets: function() {
      
      axios
        .get(`http://localhost:5000/user/recommend/${this.userName}/10/3`, {})
        .then((res) => {
          this.freets = res.data
        })
        .catch(err => {
          this.errors.push(err.response.data.error);
        })
        .then(() => {
          // this.clearMessages();
        })
    },
    updateFreet: function(freetId, newContent) {
      const bodyContent = { id:freetId, content: newContent };
      axios
        .put("/api/freets/" + freetId, bodyContent)
        .then((res) => {
          this.freets = this.freets.filter(freet => freet.id != res.data.id); // drop old Freet
          this.freets.push(res.data); // add new copy of Freet
          this.closeModal();
        })
        .catch(err => {
          this.errors.push(err.response.data.error);
        })
        .then(() => {
          this.resetForm();
          this.clearMessages();
        })
    },
    resetForm: function() {
      this.freetContent = "";
    },
    clearMessages: function() {
      // setInterval(() => {
        // this.errors = [];
      // }, 5000);
    },
    showModal: function() {
      this.isModalVisible = true;
    },
    closeModal: function() {
      this.isModalVisible = false;
    },
    debug (event) {
      console.log(event)
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
    errors: {
      deep: true,
      handler() {
        if (this.errors.length) {
          const newMsg = this.errors[this.errors.length-1];
          this.$store.commit('push', newMsg);
        }
      }
    }
  },
  components: {
    Freet,
    Navbar,
    Titlebar,
    Snackbar,
    Modal,
    EmptyPage,
  }
};
</script>

<style scoped>
textarea:focus {outline:none;}
.container {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
}
.create-freet-container {
    display: flex;
    /* justify-content: flex-start; */
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    padding: 1rem 1rem 2rem 1rem;
}
.freet-form {
  width: 500px;
}
.freets-container {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    padding: 1rem 1rem 2rem 1rem;
    /* height: 72vh; */
    /* overflow-y:scroll; */
}

#inner-freet-form {
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-style: solid;
    border-color: black;
}

#freet-text-input {
    width: 100%;
    height: 8vh;
    resize: none;
    border-color: white;
}

#new-freet-form {
    display: flex;
    flex-direction: row;
    width: 60vw;
    justify-content: center;
}

</style>