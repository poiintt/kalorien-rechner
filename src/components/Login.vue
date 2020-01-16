<template>
    <div class="class_login">
        <h1>Login</h1>
        <div id="login">
            <table>
                <tr>
                    <td>
                        <input type="text" name="username" v-model="input.username" placeholder="Benutzername"/></td>
                    <td><input type="password" name="password" v-model="input.password" placeholder="Passwort"/></td>
                    <td>
                        <button type="button" v-on:click="login()">Login</button>
                    </td>
                </tr>
            </table>
            <p>{{error_message}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                error_message: '',
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if (this.input.username !== "" && this.input.password !== "") {
                    if (this.input.username === this.$parent.testAccount.username && this.input.password === this.$parent.testAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace('/mainpage');
                    } else {
                        this.error_message = "Der Benutzername und das Passwort stimmen nicht überein.";
                    }
                } else {
                    this.error_message = "Bitte geben Sie Benutzername und Passwort an.";
                }
            }
        }
    }
</script>

<style scoped>

</style>