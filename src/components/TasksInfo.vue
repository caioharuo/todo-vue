<template>
  <div class="w-full flex justify-between">
    <div class="flex items-center gap-2">
      <p class="text-blue-500 text-sm font-bold">Tarefas criadas</p>
      <span
        class="text-xs font-bold px-2 py-0.5 bg-gray-400 text-gray-100 rounded-full"
        >{{ createdTasksAmount }}</span
      >
    </div>

    <div class="flex items-center gap-2">
      <p class="text-purple-500 text-sm font-bold">Concluídas</p>
      <span
        class="text-xs font-bold px-2 py-0.5 bg-gray-400 text-gray-100 rounded-full"
      >
        {{
          createdTasksAmount
            ? `${completedTasksAmount} de ${createdTasksAmount}`
            : createdTasksAmount
        }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { mapStores } from 'pinia';
import { useTasksStore } from '../stores/TaskStore';

export default {
  name: 'TasksInfo',
  data: () => ({ tasks: [] }),
  computed: {
    ...mapStores(useTasksStore),
    createdTasksAmount() {
      return this.tasksStore.createdTasksAmount;
    },
    completedTasksAmount() {
      return this.tasksStore.completedTasksAmount;
    },
  },
};
</script>
