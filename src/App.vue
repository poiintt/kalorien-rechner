<template>
    <div id="app">
        <div>
            <table>
                <tr>
                    <td><router-link to="/login">Login</router-link></td>
                    <td><router-link to="/mainpage">Startseite</router-link></td>
                    <td><router-link to="/overview">Übersichtsseite</router-link></td>
                </tr>
            </table>
        </div>
        <router-view>

        </router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Kalorien-Rechner',
                authenticated: false,
                testAccount: {
                    username: "us",
                    password: "pw"
                },
                params: {
                    data: [
                        ['Nahrungsmittel', 'kcal/100g'],
                        ['Kartoffeln', 86],
                        ['Nudeln', 138],
                        ['Pizza Margherita', 199],
                        ['Croissant', 393]
                    ]
                }
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
    }
    #app {
        width: 600px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: 100px auto auto;
        padding: 100px;
    }
    li td {
        text-decoration: none;
    }
</style>
