<template>
  <div id="class_app">
    <div>
      <table>
        <tr>
          <td>
            <router-link
              to="/login"
              v-if="$store.state.authenticated"
              tag="button"
            >
              <button>
                Login
              </button>
            </router-link>
          </td>
          <td>
            <router-link
              to="/mainpage"
              v-if="$store.state.authenticated"
              tag="button"
            >
              <button>
                Startseite
              </button>
            </router-link>
          </td>
          <td>
            <router-link
              to="/overview"
              v-if="$store.state.authenticated"
              tag="button"
            >
              <button>
                Übersichtsseite
              </button>
            </router-link>
          </td>
        </tr>
      </table>
    </div>
    <router-view> </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app"
});
</script>

<style>
#class_app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#class_app {
  width: 1000px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: 100px auto auto;
  padding: 100px;
}

li td {
  text-decoration: none;
}
</style>
