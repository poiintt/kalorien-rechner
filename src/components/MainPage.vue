<template>
    <div class="class_mainpage">

        <h1>Kalorien-Rechner</h1>
        <p>Berechnen Sie ganz einfach Ihren Kalorien Verbrauch</p>
        <h3>Nahrung auswählen</h3>
        <vue-table-dynamic
                :params="params"
                @selection-change="onSelectionChange"
                ref="table">
        </vue-table-dynamic>
        <p>= {{calories_total}} kcal</p>
    </div>
</template>

<script>
    import VueTableDynamic from 'vue-table-dynamic'
    import App from "@/App";

    export default {
        name: 'MainPage',
        data() {
            return {
                calories_total: 0,
                params: {
                    data: App.data().params.data,
                    header: 'row',
                    showCheck: true
                }
            }
        },
        methods: {
            onSelectionChange(checkedDatas, checkedIndexs) {
                let table = App.data().params.data;

                this.calories_total = 0;
                checkedIndexs.forEach((row) => {
                    if (row !== 0)
                        this.calories_total += table[row][1];
                });
            }
        },
        components: {VueTableDynamic}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
