<template>
    <div class="hello">

        <h1>{{ msg }}</h1>
        <p>
            Berechnen Sie ganz einfach Ihren Kalorien Verbrauch<br>
        </p>
        <h3>Nahrung auswählen</h3>
        <vue-table-dynamic
                :params="params"
                @select="onSelect"
                @selection-change="onSelectionChange"
                ref="table"
        >
        </vue-table-dynamic>
        <p>{{amount}} kcal/100g</p>
    </div>
</template>

<script>
    import VueTableDynamic from 'vue-table-dynamic'

    let kcal_total = 0;
    export default {
        name: 'MainPage',
        data() {
            return {
                msg: 'Kalorien-Rechner',
                amount: kcal_total,
                params: {
                    data: [
                        ['Nahrungsmittel', 'kcal/100g'],
                        ['Kartoffeln', 86],
                        ['Nudeln', 158],
                        ['Pizza Margherita', 199],
                        ['Croissant', 393]
                    ],
                    header: 'row',
                    showCheck: true
                }
            }
        },
        methods: {
            onSelectionChange(checkedDatas, checkedIndexs) {
                kcal_total = 0
                checkedIndexs.forEach((value) => {
                    if (value != 0)
                        kcal_total += checkedDatas[value][1]
                });
                this.amount = kcal_total
            }
        },
        components: {VueTableDynamic}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
