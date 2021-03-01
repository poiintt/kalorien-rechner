import { State } from "vue";
import { createStore } from "vuex";

export default createStore({
  state(): State {
    return {
      authenticated: true,
      testAccount: {
        username: "us",
        password: "pw"
      },
      table: {
        columns: [
          {
            label: "Nahrungsmittel",
            field: "food",
            isKey: true
          },
          {
            label: "kcal/100g",
            field: "kcal"
          }
        ],
        rows: [
          {
            food: "Kartoffeln",
            kcal: 86
          },
          {
            food: "Nudeln",
            kcal: 138
          },
          {
            food: "Pizza Margherita",
            kcal: 199
          },
          {
            food: "Croissant",
            kcal: 393
          }
        ],
        messages: {
          pagingInfo: "Showing {0}-{1} of {2}",
          pageSizeChangeLabel: "Row count:",
          gotoPageLabel: "Go to page:",
          noDataAvailable: "Keine Daten gefunden"
        }
      }
    };
  },
  mutations: {
    addRow(state: State, row: any) {
      state.table.rows.push(row);
    },
    removeRow(state: State, food: string) {
      state.table.rows = state.table.rows.filter(item => item.food !== food);
    }
  },
  getters: {
    rowCount(state: State) {
      return state.table.rows.length;
    },
    getRowByFood: (state: State) => (food: string) => {
      return state.table.rows.find((row: any) => row.food === food);
    }
  },
  actions: {},
  modules: {}
});
