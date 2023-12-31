<template>
  <div
    class="flex gap-3 items-start p-4 bg-gray-500 border border-gray-400 rounded-lg"
  >
    <CheckboxRoot
      @update:checked="toggleTaskCompleted"
      :checked="task.isCompleted"
      class="w-4 h-4 bg-transparent border-2 border-blue-500 rounded-full transition-colors data-[state=checked]:border-purple-700 data-[state=checked]:bg-purple-700 data-[state=checked]:hover:bg-purple-500 data-[state=checked]:hover:border-purple-500 hover:bg-blue-700/20"
    >
      <CheckboxIndicator
        class="bg-white h-full w-full rounded flex items-center justify-center"
      >
        <PhCheck weight="bold" class="w-2 h-2 text-gray-100" />
      </CheckboxIndicator>
    </CheckboxRoot>

    <p
      class="flex-1 text-gray-100 text-sm leading-tight"
      :class="{ ['text-gray-300 line-through']: task.isCompleted }"
    >
      {{ task.name }}
    </p>

    <button
      @click="removeTask(task.id)"
      class="group transition rounded w-6 h-6 flex items-center justify-center hover:bg-gray-400"
    >
      <PhTrash class="text-gray-300 group-hover:text-red-500" />
    </button>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { mapStores } from 'pinia';
import { CheckboxIndicator, CheckboxRoot } from 'radix-vue';
import { PhTrash, PhCheck } from '@phosphor-icons/vue';

import { useTasksStore } from '../stores/TaskStore';
import type { Task } from '../@types/task';

export default {
  name: 'TaskCard',
  components: {
    CheckboxIndicator,
    CheckboxRoot,
    PhTrash,
    PhCheck,
  },
  props: {
    task: {
      type: Object as PropType<Task>,
      required: true,
    },
  },
  computed: {
    ...mapStores(useTasksStore),
  },
  methods: {
    toggleTaskCompleted() {
      this.task.isCompleted = !this.task.isCompleted;
    },
    removeTask(taskId: string) {
      this.tasksStore.remove(taskId);
    },
  },
};
</script>
