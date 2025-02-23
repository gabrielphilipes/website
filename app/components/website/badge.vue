<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <span
    class="text-xs bg-zinc-100 hover:bg-zinc-200 px-3 py-1 rounded-full font-medium text-zinc-500 cursor-default ph_transition"
  >
    {{ text }}
  </span>
</template>
