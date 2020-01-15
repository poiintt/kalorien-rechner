<template>
    <div id="app">
        <MainPage msg="Kalorien-Rechner"/>
        <div>
            <table>
                <tr>
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
    import MainPage from './components/Home.vue'

    export default {
        name: 'app',
        components: {
            MainPage
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
</style>
