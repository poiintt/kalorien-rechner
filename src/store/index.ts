import { createStore } from "vuex";

export default createStore({
  state() {
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
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
