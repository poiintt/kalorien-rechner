<template>
  <div class="class_mainpage">
    <h1>Kalorien-Rechner</h1>
    <p>Berechnen Sie ganz einfach Ihren Kalorien Verbrauch</p>
    <h3>Nahrungsmittel auswählen</h3>
    <vue-table-dynamic
      style="width: 600px"
      :params="params"
      @selection-change="onSelectionChange"
      ref="table"
    >
    </vue-table-dynamic>
    <p>= {{ calories_total }} kcal von 2000 kcal Tagesbedarf</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueTableDynamic from "vue-table-dynamic";

export default defineComponent({
  name: "MainPage",
  data() {
    return {
      caloriesTotal: 0,
      params: {
        data: this.$parent._data.params.data,
        header: "row",
        showCheck: true
      }
    };
  },
  methods: {
    onSelectionChange(checkedDatas, checkedIndexs: Array<number>) {
      const table = this.$parent._data.params.data;

      this.caloriesTotal = 0;
      checkedIndexs.forEach(row => {
        if (row !== 0) this.caloriesTotal += table[row][1];
      });
    }
  },
  components: { VueTableDynamic }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
