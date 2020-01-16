<template>
    <div class="hello">

        <h1>{{ msg }}</h1>
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
    import Overview from "@/components/Overview";

    export default {
        name: 'MainPage',
        data() {
            return {
                msg: 'Kalorien-Rechner',
                calories_total: 0,
                params: {
                    data: Overview.data().params.data,
                    header: 'row',
                    showCheck: true
                }
            }
        },
        methods: {
            onSelectionChange(checkedDatas, checkedIndexs) {
                let table = Overview.data().params.data;

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
