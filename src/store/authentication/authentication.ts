import { defineStore } from "pinia";

export const useAuthenticationStore = defineStore({
  id: "authentication",
  state: () => ({
    _isAuthencatied: true,
  }),

  actions: {
    async signInAsync() {
      this._isAuthencatied = true;
    },
    async signOutAsync() {
      this._isAuthencatied = false;
    },
  },

  getters:{
    isAuthencatied(state){
        return state._isAuthencatied
    }
  }
});
