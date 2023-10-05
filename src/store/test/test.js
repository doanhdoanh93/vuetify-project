import { defineStore } from "pinia";

export const useTestStore = defineStore({
  id: "test",
  state: () => ({
    test: "Hello",
    test2:"",
    status: true,
  }),

  actions: {
    saveTest(vd) {
      this.test2 = vd;
      this.status = false;
    },
    backTest() {
      this.currentPage--;
    },
  },

  getters: {
    getTest(state) {
      return state.test;
    },
  },
});
