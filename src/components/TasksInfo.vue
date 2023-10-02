<template>
  <div class="w-full flex justify-between">
    <div class="flex items-center gap-2">
      <p class="text-blue-500 text-sm font-bold">Tarefas criadas</p>
      <span
        class="text-xs font-bold px-2 py-0.5 bg-gray-400 text-gray-100 rounded-full"
        >0</span
      >
    </div>

    <div class="flex items-center gap-2">
      <p class="text-purple-500 text-sm font-bold">Concluídas</p>
      <span
        class="text-xs font-bold px-2 py-0.5 bg-gray-400 text-gray-100 rounded-full"
        >0</span
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TasksInfo',
};
</script>
