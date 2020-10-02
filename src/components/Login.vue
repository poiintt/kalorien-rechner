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
import { defineComponent } from "vue";
export default defineComponent({
  name: "Login",
  data() {
    return {
      errorMessage: "",
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    //Login Button wird gedrückt
    login() {
      if (this.input.username !== "" && this.input.password !== "") {
        if (
          this.input.username === this.$parent?.testAccount.username &&
          this.input.password === this.$parent.testAccount.password
        ) {
          this.$parent.authenticated = true;
          this.$router.replace("/mainpage");
        } else {
          this.errorMessage =
            "Der Benutzername und das Passwort stimmen nicht überein.";
        }
      } else {
        this.errorMessage = "Bitte geben Sie Benutzername und Passwort an.";
      }
    }
  }
});
</script>
