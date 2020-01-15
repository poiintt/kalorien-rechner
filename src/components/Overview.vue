<template>
    <div class="hello">

        <h1>{{ msg }}</h1>
        <p>
            Kalorien Übersicht<br>
        </p>
        <table id="table_kcal">
            <thead>
            <tr>
                <th>Nahrung</th>
                <th>kcal/100g</th>
            </tr>
            </thead>
            <thead>
            <tr>
                <th>Kartoffel</th>
                <th>86</th>
            </tr>
            </thead>
            <thead>
            <tr>
                <th>Nudeln</th>
                <th>158</th>
            </tr>
            </thead>
            <thead>
            <tr>
                <th>Pizza Margherita</th>
                <th>199</th>
            </tr>
            </thead>
            <thead>
            <tr>
                <th>Croissant</th>
                <th>393</th>
            </tr>
            </thead>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Overview",
        data() {
            return {
                msg: 'Übersichtseite'
            }
        }
    }
</script>

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
