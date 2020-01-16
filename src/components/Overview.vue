<template>
    <div class="class_overview">
        <h1>Übersichtseite</h1>
        <p>
            Kalorien Übersich
        </p>
        <vue-table-dynamic
                :params="params"
                @select="onSelectionChange"
                @cell-change="onTableEdit"
                ref="table">
        </vue-table-dynamic>
        <table>
            <tr>
                <td><input id="input_food" v-model="input_food" placeholder="Nahrungsmittel"></td>
                <td><input id="input_calories" v-model="input_calories" placeholder="kcal/100g"></td>
                <td>
                    <button v-on:click="btn_add">Hinzufügen</button>
                </td>
                <td>
                    <button v-on:click="btn_remove">Entfernen</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import VueTableDynamic from "vue-table-dynamic";
    import App from "@/App";

    export default {
        name: "Overview",
        data() {
            return {
                input_food: '',
                input_calories: '',
                params: {
                    data: App.data().params.data,
                    header: 'row',
                    showCheck: true,
                    edit: {row: 'all'}
                }
            }
        },
        methods: {
            btn_add() {
                App.data().params.data.add([this.input_food, this.input_calories]);
                this.msg = this.input_food + this.input_calories;
            },
            btn_remove() {
                //remove row/s
            },
            onTableEdit() {
                //save changes
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
