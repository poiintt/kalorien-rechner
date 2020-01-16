<template>
    <div class="class_overview">
        <h1>Übersichtseite</h1>
        <p>
            Kalorien Übersicht
        </p>
        <vue-table-dynamic
                :params="params"
                @selection-change="onSelectionChange"
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
    /* eslint-disable */

    import VueTableDynamic from "vue-table-dynamic";
    import App from "@/App";
    // eslint-disable-next-line no-unused-vars
    let selectedrows;

    export default {
        name: "Overview",
        data() {
            return {
                input_food: '',
                input_calories: ''
            }
        },
        computed:{
            params(){
                return this.$parent._data.params;
            }
        },
        methods: {
            btn_add() {
                this.params.data.add([this.input_food, this.input_calories]);
            },
            btn_remove: function () {
                //this.$parent.data().params.data
                //console.log(this.$parent)
                selectedrows.forEach((row, index) => {
                    if (index !== 0) {
                        console.log(this.params.data);
                        this.$parent._data.params.data.splice(index, 1,);
                        //this.$parent._data.params, `data[${index}]`, [1,2];

                        console.log(this.params.data);
                    }
                });

            },
            onTableEdit() {
                //save changes
            },
            onSelectionChange(checkedDatas, checkedIndexs)  {
                selectedrows = checkedIndexs;
                this.input_food = selectedrows
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
