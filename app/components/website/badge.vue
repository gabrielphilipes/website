<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <span
    class="text-xs bg-zinc-100 dark:bg-zinc-700 hover:bg-primary-500 hover:text-white px-3 py-1 rounded-full font-medium text-zinc-500 dark:text-zinc-300 cursor-default ph_transition"
  >
    {{ text }}
  </span>
</template>
