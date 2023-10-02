<template>
  <main>
    <!-- <EmptyTasks /> -->
    <TaskCard />
  </main>
</template>

<script lang="ts">
import EmptyTasks from './EmptyTasks.vue';
import TaskCard from './TaskCard.vue';

export default {
  name: 'TaskList',
  components: {
    EmptyTasks,
    TaskCard,
  },
};
</script>
