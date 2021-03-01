<template>
  <div id="class_adbanner">
    <router-link to="/landingpage">
      <img id="banner" src="../assets/banner.png" alt="banner" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdBanner"
});
</script>

<style scoped></style>
