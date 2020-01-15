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
    </div>
</template>

<script>
    import VueTableDynamic from 'vue-table-dynamic'

    export default {
        name: 'MainPage',
        data() {
            return {
                msg: 'Kalorien-Rechner',
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
            onSelect (isChecked, index, data) {
                // eslint-disable-next-line no-console
                console.log('onSelect: ', isChecked, index, data)
                //console.log('Checked Data:', this.$refs.table.getCheckedRowDatas(true))
            },
            onSelectionChange (checkedDatas, checkedIndexs, checkedNum) {
                // eslint-disable-next-line no-console
                console.log('onSelectionChange: ', checkedDatas, checkedIndexs, checkedNum)
            }
        },
        components: {VueTableDynamic}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
