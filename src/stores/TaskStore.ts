import { defineStore } from 'pinia';
import type { Task } from '../@types/task';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as Task[],
  }),
  getters: {
    createdTasksAmount({ tasks }) {
      return tasks.length;
    },
    completedTasksAmount({ tasks }) {
      return tasks.filter((task: any) => task.isCompleted).length;
    },
  },
  actions: {
    add(newTask: Task) {
      this.tasks.push(newTask);
    },
    remove(taskId: string) {
      const taskForRemovedIndex = this.tasks.findIndex(
        (task) => task.id === taskId
      );

      this.tasks.splice(taskForRemovedIndex, 1);
    },
  },
});
