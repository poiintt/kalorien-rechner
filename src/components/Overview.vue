<template>
  <div class="class_overview">
    <h1>Übersichtseite</h1>
    <p>Kalorien Übersicht</p>
    <vue-table-dynamic
      style="width: 600px"
      :params="params"
      @selection-change="onSelectionChange"
      @cell-change="onTableEdit"
      ref="vuetable"
    >
    </vue-table-dynamic>
    <table>
      <tr>
        <td>
          <input
            id="inputFood"
            v-model="inputFood"
            placeholder="Nahrungsmittel"
          />
        </td>
        <td>
          <input
            id="inputCalories"
            v-model="inputCalories"
            placeholder="kcal/100g"
          />
        </td>
        <td>
          <button v-on:click="btnAdd">Hinzufügen</button>
        </td>
        <td>
          <button v-on:click="btnRemove">Entfernen</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueTableDynamic from "vue-table-dynamic";

let selectedRows: number[];

export default defineComponent({
  name: "Overview",
  data() {
    return {
      inputFood: "",
      inputCalories: "",
    };
  },
  computed: {
    params() {
      return this.$parent._data.params;
    },
  },
  methods: {
    btnAdd() {
      this.$parent._data.params.data.push([
        this.inputFood,
        Number(this.inputCalories)
      ]);
    },
    btnRemove: function () {
      console.log(selectedRows);

      selectedRows.reverse().forEach((index: number) => {
        if (index !== 0) {
          this.$parent?._data.params.data.splice(index, 1);
        }
      });
    },
    onTableEdit() {
      const tableParsed = this.$refs.vuetable.getData();

      tableParsed.forEach((array: any, index: number) => {
        if (index !== 0)
          tableParsed[index][1] = Number(tableParsed[index][1]);
      });

      this.$parent._data.params.data = tableParsed;
    },
    onSelectionChange(checkedDatas: any, checkedIndexs: number[]) {
      selectedRows = checkedIndexs;
    },
  },
  components: { VueTableDynamic },
});
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
