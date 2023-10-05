import { defineStore } from "pinia";
import axios from "axios";

export const useHeaderNameStore = defineStore({
  id: "headerName",
  state: () => ({
    headerName: {
      name: "",
    },
  }),

  actions: {
    setHeaderName(name: string) {
      this.headerName.name = name;
      axios.defaults.headers.post["keyName"] = name;
    },
  },

  getters: {
    getHeaderName(state) {
      return state.headerName.name;
    },
  },
});
