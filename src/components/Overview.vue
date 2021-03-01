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
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import VueTableLite from "vue3-table-lite";

export default defineComponent({
  name: "Overview",
  components: { VueTableLite },
  setup() {
    const store = useStore();
    const inputFood = ref("");
    const inputCalories = ref("");

    const btnAdd = () => {
      store.commit("addRow", {
        food: inputFood.value,
        kcal: Number(inputCalories.value)
      });
    };

    const btnRemove = () => {
      store.commit("removeRow", inputFood.value);
      inputFood.value = "";
      inputCalories.value = "";
    };

    const updateCheckedRows = (rowKeys: string) => {
      if (rowKeys.length) {
        const row = store.getters.getRowByFood(rowKeys[0]);
        inputFood.value = row.food;
        inputCalories.value = row.kcal;
      } else {
        inputFood.value = "";
        inputCalories.value = "";
      }
    };
    return {
      inputFood,
      inputCalories,
      btnAdd,
      btnRemove,
      updateCheckedRows
    };
  }
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
