<template>
  <main v-if="tasks.length" class="flex flex-col gap-2">
    <TaskCard v-for="(task, index) in tasks" :key="index" :task="task" />
  </main>

  <EmptyTasks v-else />
</template>

<script lang="ts">
import { mapStores } from 'pinia';
import { useTasksStore } from '../stores/TaskStore';

import EmptyTasks from './EmptyTasks.vue';
import TaskCard from './TaskCard.vue';

export default {
  name: 'TaskList',
  components: {
    EmptyTasks,
    TaskCard,
  },
  computed: {
    ...mapStores(useTasksStore),
    tasks() {
      return this.tasksStore.tasks;
    },
  },
};
</script>
