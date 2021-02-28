<template>
  <div>
    <Navbar/>
    <div class='main'>
      <CreateFreetForm v-if="userName"/>
      <div>
        <button class="button" v-bind:class="{ active: allFreets }" v-on:click=" () => {this.allFreets = true}"> All Freets </button> {{' '}}
        <button class="button" v-bind:class="{ active: !allFreets }" v-on:click=" () => {this.allFreets = false}"> Your Feed </button>
      </div>
      <FreetList v-if="allFreets" v-bind:allFreets="true"/>
      <div v-else>
        <FreetList v-bind:feed="false"/>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .active {
    background: black;
  }
</style>

<script>
import CreateFreetForm from "../components/CreateFreetForm.vue";
import FreetList from "../components/FreetList.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "home",
  data() {
    return {
      userName: this.$cookie.get('fritter-auth'),
      allFreets: true
    }
  },
  components: {
    CreateFreetForm,
    FreetList,
    Navbar
  }
};
</script>
