<template>
  <AppHeader />

  <div class="w-full max-w-[736px] mx-auto relative">
    <AddTaskForm />

    <div class="pt-24 flex flex-col gap-6">
      <TasksInfo />
      <TaskList />
    </div>
  </div>
</template>

<script lang="ts">
import AppHeader from '../components/AppHeader.vue';
import AddTaskForm from '../components/AddTaskForm.vue';
import TasksInfo from '../components/TasksInfo.vue';
import TaskList from '../components/TaskList.vue';

export default {
  name: 'Home',
  components: {
    AppHeader,
    AddTaskForm,
    TasksInfo,
    TaskList,
  },
};
</script>
