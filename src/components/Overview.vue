<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            Kalorien Übersicht<br>
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">Startseite</a>
        </p>
        <table id="tabel1">
            <thead>
            <tr>
                <th>Nahrung</th>
                <th>Kalorien</th>
            </tr>
            </thead>
            <thead>
            <tr>
                <th>Kartoffel</th>
                <th>2</th>
            </tr>
            </thead>
            <thead>
            <tr>
                <th>Nudeln</th>
                <th>3</th>
            </tr>
            </thead>
            <thead>
            <tr>
                <textarea></textarea>
                <textarea></textarea>
            </tr>
            </thead>
        </table><button>Neues Element hinzufügen</button>
    </div>
</template>

<script>
    export default {
        name: "Overview"
    }
</script>

<style scoped>

</style>