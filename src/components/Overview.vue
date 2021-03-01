<template>
  <div class="class_overview">
    <h1>Übersichtseite</h1>
    <p>Kalorien Übersicht</p>
    <vue-table-lite
      style="width: 600px"
      :has-checkbox="true"
      :columns="$store.state.table.columns"
      :rows="$store.state.table.rows"
      :total="$store.getters.rowCount"
      :messages="$store.state.table.messages"
      @return-checked-rows="updateCheckedRows"
    />
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
import VueTableLite from "vue3-table-lite";

let selectedRows: number[];

export default defineComponent({
  name: "Overview",
  data() {
    return {
      inputFood: "",
      inputCalories: ""
    };
  },
  methods: {
    btnAdd() {
      this.$store.commit("addRow", {
        food: this.inputFood,
        kcal: Number(this.inputCalories)
      });
    },
    btnRemove() {
      this.$store.commit("removeRow", this.inputFood);
      this.inputFood = "";
      this.inputCalories = "";
    },
    onTableEdit() {
      // const tableParsed = this.$refs.vuetable.getData();
      // tableParsed.forEach((array: any, index: number) => {
      //   if (index !== 0) tableParsed[index][1] = Number(tableParsed[index][1]);
      // });
      // store.state.params.data = tableParsed;
    },
    onSelectionChange(checkedDatas: any, checkedIndexs: number[]) {
      selectedRows = checkedIndexs;
    },
    updateCheckedRows(rowKeys: string) {
      if (rowKeys.length) {
        const row = this.$store.getters.getRowByFood(rowKeys[0]);
        this.inputFood = row.food;
        this.inputCalories = row.kcal;
      } else {
        this.inputFood = "";
        this.inputCalories = "";
      }
    }
  },
  components: { VueTableLite }
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
