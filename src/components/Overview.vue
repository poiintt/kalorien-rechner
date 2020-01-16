<template>
    <div class="hello">

        <h1>{{ msg }}</h1>
        <p>
            Kalorien Übersicht<br>
        </p>
        <vue-table-dynamic
                :params="params"
                ref="table2">
        </vue-table-dynamic>
        <table>
            <tr>
                <td><input id="input_food" v-model="input_food" placeholder="Nahrungsmittel"></td>
                <td><input id="input_calories" v-model="input_calories" placeholder="kcal/100g"></td>
                <td>
                    <button v-on:click="onButtonClick">Nahrungsmittel hinzügen</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import VueTableDynamic from "vue-table-dynamic";

    export default {
        name: "Overview",
        data() {
            return {
                msg: 'Übersichtseite',
                input_food: '',
                input_calories: '',
                params: {
                    data: [
                        ['Nahrungsmittel', 'kcal/100g'],
                        ['Kartoffeln', 86],
                        ['Nudeln', 138],
                        ['Pizza Margherita', 199],
                        ['Croissant', 393]
                    ],
                    header: 'row',
                }
            }
        },
        methods: {
            onButtonClick() {
                this.params.data.push([this.input_food,this.input_calories])
            }
        },
        components: {VueTableDynamic}
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
