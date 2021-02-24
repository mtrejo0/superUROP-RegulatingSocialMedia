<template>
  <div id="user-settings">
    <p>This is the percived interest you have in the following topics:</p>
    <SignOut/>
  </div>
</template>

<script>
import SignOut from "./SignOut.vue";

export default {
  name: "UserSettings",

  components: {
    SignOut
  },
};
</script>