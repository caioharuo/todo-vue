import { defineStore } from 'pinia';
import type { Task } from '../@types/task';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as Task[],
  }),
  actions: {
    add(newTask: Task) {
      this.tasks.push(newTask);
    },
  },
});
