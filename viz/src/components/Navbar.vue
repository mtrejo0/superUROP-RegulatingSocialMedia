<template>
  <div class="nav-align">
    <FritterLogo/>
    <SearchUser/>
    <LoginSignUpButton/>
  </div>
</template>

<script>
import FritterLogo from "./FritterLogo.vue";
import SearchUser from "./SearchUser.vue";
import LoginSignUpButton from "./LoginSignUpButton.vue";
export default {
  name: "nav_bar",
  data() {
    return {
      userName: this.$cookie.get('fritter-auth')
    }
  },
  components: {
    FritterLogo,
    SearchUser,
    LoginSignUpButton
  }
};
</script>
