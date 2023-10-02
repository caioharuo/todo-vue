<template>
  <header
    class="w-full bg-gray-700 min-h-[200px] flex items-center justify-center"
  >
    <LogoIcon />
  </header>
</template>

<script lang="ts">
import LogoIcon from './icons/LogoIcon.vue';

export default {
  name: 'AppHeader',
  components: {
    LogoIcon,
  },
};
</script>
