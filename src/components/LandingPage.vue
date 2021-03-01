<template>
  <div id="class_adbanner">
    <u><h1>kcal-calc</h1></u>
    <p>Ganz einfach den kcal-Wert Ihrer Nahrung berechnen.</p>
    <table id="table">
      <td>
        <img
          id="screen_mainpage"
          src="../assets/kcal-calc_mainpage.png"
          alt="Screenshot_main"
        />
      </td>
      <td>
        <img
          id="screen_overview"
          src="../assets/kcal-calc_overview.png"
          alt="Screenshot"
        />
      </td>
    </table>
    <h3>Kalorien-Rechner benutzen</h3>
    <router-link to="/login" tag="button">Bei kcal-calc anmelden</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LandingPage"
});
</script>

<style scoped>
#class_adbanner {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  border: 1px solid #021a40;
  width: 500px;
}
</style>
