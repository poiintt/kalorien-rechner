import { Store } from "vuex";
import { State } from "./store";
import { ComponentCustomProperties } from "vue";

declare module "@vue/runtime-core" {
  interface Row {
    food: string;
    kcal: number;
  }
  interface Column {
    label: string;
    field: string;
    isKey?: boolean;
  }
  interface State {
    authenticated: boolean;
    testAccount: {
      username: string;
      password: string;
    };
    table: {
      columns: Column[];
      rows: Row[];
      messages: {
        pagingInfo: string;
        pageSizeChangeLabel: string;
        gotoPageLabel: string;
        noDataAvailable: string;
      };
    };
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
