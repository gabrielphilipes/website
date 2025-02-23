<script setup lang="ts">
defineProps<{
  name: string;
  level: string;
  description?: string;
}>();
</script>

<template>
  <li class="flex flex-wrap justify-between items-center w-full group">
    <span class="text-sm font-medium">{{ name }}</span>

    <span class="flex-1 border-t border-dotted border-gray-300 mx-4" />

    <span class="text-xs text-zinc-400 group-hover:text-zinc-600 ph_transition">
      {{ level }}
    </span>

    <p v-if="description" class="w-full text-sm text-zinc-400">
      {{ description }}
    </p>
  </li>
</template>
