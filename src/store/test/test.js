import { defineStore } from "pinia";

export const useTestStore = defineStore({
  id: "test",
  state: () => ({
    test: "Hello",
    status: true,
  }),

  actions: {
    saveTest(vd) {
      this.test = vd;
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
