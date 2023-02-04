import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    leftDrawerOpen: true,
    headOpen: true,
  }),

  actions: {
    toggleLeftDraw() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    toggleHead() {
      this.headOpen = !this.headOpen;
    },
  },
});
