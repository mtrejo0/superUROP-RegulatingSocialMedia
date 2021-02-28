<template>
  <div>
    <FritterLogo/>
    <UserSettings/>
  </div>
</template>

<script>
import UserSettings from "../components/UserSettings.vue";
import FritterLogo from "../components/FritterLogo.vue";

export default {
  name: "account",
  components: {
    UserSettings,
    FritterLogo
  }
};
</script>
