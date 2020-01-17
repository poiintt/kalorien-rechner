<template>
    <div id="class_app">
        <div>
            <table>
                <tr>
                    <td>
                        <router-link to="/login" v-if="authenticated" tag="button">Login</router-link>
                    </td>
                    <td>
                        <router-link to="/mainpage" v-if="authenticated" tag="button">Startseite</router-link>
                    </td>
                    <td>
                        <router-link to="/overview" v-if="authenticated" tag="button">Übersichtsseite</router-link>
                    </td>
                </tr>
            </table>
        </div>
        <router-view>
        </router-view>
    </div>
</template>

<script>
    /* eslint-disable*/
    import AdBanner from '@/components/AdBanner'

    export default {
        name: 'app',
        components: {
            AdBanner
        },
        data() {
            return {
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
                    ],
                    header: 'row',
                    showCheck: true,
                    edit: {row: 'all'}
                }
            }
        },
        methods: {}
    }
</script>

<style>
    #class_app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
    }

    #class_app {
        width: 1000px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: 100px auto auto;
        padding: 100px;
    }

    li td {
        text-decoration: none;
    }
</style>
