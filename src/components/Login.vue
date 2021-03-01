<template>
  <div class="class_login">
    <h1>Login</h1>
    <div id="login">
      <table>
        <tr>
          <td>
            <input
              type="text"
              name="username"
              v-model="input.username"
              placeholder="Benutzername"
            />
          </td>
          <td>
            <input
              type="password"
              name="password"
              v-model="input.password"
              placeholder="Passwort"
            />
          </td>
          <td>
            <button type="button" @click="login">Login</button>
          </td>
        </tr>
      </table>

      <p>
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import router from "../router";

export default defineComponent({
  name: "Login",
  setup() {
    const store = useStore();

    const errorMessage = ref("");
    const username = ref("");
    const password = ref("");
    const input = { username, password };

    const login = () => {
      if (username.value !== "" && password.value !== "") {
        if (
          username.value === store.state.testAccount.username &&
          password.value === store.state.testAccount.password
        ) {
          store.state.authenticated = true;
          router.replace("/mainpage");
        } else {
          errorMessage.value =
            "Der Benutzername und das Passwort stimmen nicht überein.";
        }
      } else {
        errorMessage.value = "Bitte geben Sie Benutzername und Passwort an.";
      }
    };

    return {
      errorMessage,
      input,
      login
    };
  }
});
</script>
