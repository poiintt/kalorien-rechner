<template>
  <div class="class_mainpage">
    <h1>Kalorien-Rechner</h1>
    <p>Berechnen Sie ganz einfach Ihren Kalorien Verbrauch</p>
    <h3>Nahrungsmittel auswählen</h3>
    <vue-table-lite
      :has-checkbox="true"
      :columns="$store.state.table.columns"
      :rows="$store.state.table.rows"
      :total="$store.state.table.rows.length"
      :messages="$store.state.table.messages"
      @return-checked-rows="updateCheckedRows"
    />
    <p>= {{ caloriesTotal }} kcal von 2000 kcal Tagesbedarf</p>
  </div>
</template>

<script lang="ts">
import VueTableLite from "vue3-table-lite";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const caloriesTotal = ref(0);

    const updateCheckedRows = (rowKeys: string) => {
      caloriesTotal.value = 0;
      for (const row of rowKeys) {
        const result = store.state.table.rows.find((x: any) => x.food === row);
        caloriesTotal.value += result.kcal;
      }
    };

    return {
      updateCheckedRows,
      caloriesTotal,
    };
  },
  name: "MainPage",
  components: { VueTableLite },
});
</script>
