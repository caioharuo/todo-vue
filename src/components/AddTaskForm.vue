<template>
  <form
    @submit.prevent="addTask"
    class="w-full flex gap-2 absolute top-0 -translate-y-[50%]"
  >
    <input
      :value="newTaskName"
      @input="newTaskName = ($event.target as HTMLInputElement).value"
      placeholder="Adicione uma nova tarefa"
      class="flex-1 border-2 border-gray-500 bg-gray-500 p-4 text-gray-100 leading-tight placeholder:text-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
      type="text"
    />
    <button
      class="text-sm text-gray-100 font-bold bg-blue-700 flex items-center gap-2 p-4 rounded-lg hover:bg-blue-500 focus:bg-blue-500 focus:outline-none"
    >
      Criar
      <PhPlusCircle weight="bold" class="w-4 h-4 text-gray-100" />
    </button>
  </form>
</template>

<script lang="ts">
import { mapStores } from 'pinia';
import { PhPlusCircle } from '@phosphor-icons/vue';

import { useTasksStore } from '../stores/TaskStore';

export default {
  name: 'AddTaskForm',
  data() {
    return {
      newTaskName: '',
    };
  },
  components: {
    PhPlusCircle,
  },
  computed: {
    ...mapStores(useTasksStore),
  },
  methods: {
    addTask() {
      if (!this.newTaskName.trim()) return;

      this.tasksStore.add({
        name: this.newTaskName,
        isCompleted: false,
      });

      this.newTaskName = '';
    },
  },
};
</script>
