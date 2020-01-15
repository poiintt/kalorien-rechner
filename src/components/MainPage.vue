<template>
  <div class="hello">
    <h1><a v-bind:href="link">{{ msg }}</a></h1>
    <p>
      Berechnen Sie ganz einfach Ihren Kalorien Verbrauch<br>
      <a href="" target="_blank" rel="noopener">Übersichtseite</a>
    </p>
    <h3>Nahrung auswählen</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    msg: String,
    link: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
