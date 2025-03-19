<script setup lang="ts">
defineProps<{ text: string }>();
//class="text-xs bg-gray-100 dark:bg-zinc-700 hover:bg-gradient-to-r hover:from-primary-400 hover:to-primary-500 hover:text-white px-3 py-1 rounded-full font-medium text-zinc-500 dark:text-zinc-300 cursor-default ph_transition"
</script>

<template>
  <span
    :class="[
      'text-xs hover:text-white px-3 py-1 rounded-full font-medium text-zinc-500 dark:text-zinc-300 cursor-default ph_transition',
      'bg-gradient-to-r from-gray-100 via-gray-200 dark:from-zinc-700 dark:via-zinc-800 to-primary-500 hover:via-primary-100 bg-size-400 bg-pos-0 bg-pos-100',
    ]"
  >
    {{ text }}
  </span>
</template>

<style scoped>
.bg-size-400 {
  background-size: 400% 400%;
}

.bg-pos-0 {
  background-position: 0 0;
}

.bg-pos-100:hover {
  background-position: 100% 100%;
}
</style>
