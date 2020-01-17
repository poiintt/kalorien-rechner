<template>
    <div class="class_overview">
        <h1>Übersichtseite</h1>
        <p>
            Kalorien Übersicht
        </p>
        <vue-table-dynamic
                style="width: 600px"
                :params="params"
                @selection-change="onSelectionChange"
                @cell-change="onTableEdit"
                ref="vuetable">
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
    /* eslint-disable*/
    import VueTableDynamic from "vue-table-dynamic";

    let selected_rows;

    export default {
        name: "Overview",
        data() {
            return {
                input_food: '',
                input_calories: ''
            }
        },
        computed: {
            params() {
                return this.$parent._data.params;
            }
        },
        methods: {
            btn_add() {
                this.$parent._data.params.data.push([this.input_food, this.input_calories].parseInt());
            },
            btn_remove: function () {
                console.log(selected_rows);

                selected_rows.reverse().forEach((index) => {
                    if (index !== 0) {
                        this.$parent._data.params.data.splice(index, 1,);
                    }
                });
            },
            onTableEdit() {
                let table_parsed = this.$refs.vuetable.getData();

                table_parsed.forEach((array, index) => {
                    if (index !== 0)
                        table_parsed[index][1] = Number(table_parsed[index][1]);
                });

                this.$parent._data.params.data = table_parsed
            },
            onSelectionChange(checkedDatas, checkedIndexs) {
                selected_rows = checkedIndexs;
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
