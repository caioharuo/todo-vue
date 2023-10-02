<template>
  <div
    class="py-16 px-6 flex flex-col gap-4 justify-center items-center border-t border-gray-400 rounded-lg"
  >
    <ClipboardIcon class="w-14 h-14" />
    <p class="text-gray-300 text-center">
      <strong class="block">Você ainda não tem tarefas cadastradas</strong>
      Crie tarefas e organize seus itens a fazer
    </p>
  </div>
</template>

<script lang="ts">
import ClipboardIcon from './icons/ClipboardIcon.vue';

export default {
  name: 'EmptyTasks',
  components: {
    ClipboardIcon,
  },
};
</script>
