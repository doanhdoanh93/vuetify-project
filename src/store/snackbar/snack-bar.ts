import { defineStore } from "pinia";

export interface SnackBarQueueItem {
  id: string;
  message: string;
}

export const useSnackBarStore = defineStore({
  id: "sankBarStore",
  state: () => ({
    queue: [] as SnackBarQueueItem[],
  }),

  actions: {
    enqueue(message: string): void {
      if (!message) {
        return;
      }
      this.queue.push({
        id: Date.now().toString(),
        message: message,
      });
    },

    dequeue(id: string): SnackBarQueueItem | undefined {
      const index = this.queue.findIndex((item) => item.id === id);

      if (index === -1) {
        return undefined;
      }
      const result = this.queue[index];
      this.queue.splice(index, 1);
      return result;
    },
  },

  getters: {
    getQueue(state): SnackBarQueueItem[] {
      return state.queue;
    },
  },
});
