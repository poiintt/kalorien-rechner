<template>
    <div id="app">
        <MainPage msg="Kalorien-Rechner"/>
        <div>
            <ul>
                <li>
                    <router-link to="/mainpage">Startseite</router-link>
                </li>
                <li>
                    <router-link to="/overview">Übersichtsseite</router-link>
                </li>
            </ul>
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
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
