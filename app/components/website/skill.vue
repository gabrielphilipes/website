<script setup lang="ts">
defineProps<{
  name: string;
  level: string;
  description?: string;
}>();

const isOpen = ref<boolean>(false);
</script>

<template>
  <li class="flex flex-wrap justify-between items-center w-full group">
    <span class="text-sm font-medium">{{ name }}</span>

    <span class="flex-1 border-t border-dotted border-gray-300 mx-4" />

    <span class="text-xs text-zinc-400 group-hover:text-zinc-600 ph_transition">
      {{ level }}
    </span>

    <p v-if="description && isOpen" class="w-full text-sm text-zinc-400">
      {{ description }}
    </p>

    <span
      v-if="description"
      @click="isOpen = !isOpen"
      class="flex items-center gap-1 w-full cursor-pointer text-sm text-zinc-400 hover:text-zinc-600 ph_transition"
      :class="{ 'text-zinc-600 mt-2': isOpen }"
    >
      {{ isOpen ? "Ocultar descrição" : "Ver mais" }}
      <Icon
        name="heroicons:chevron-down"
        size="13"
        :class="{ 'rotate-180 ph_transition': isOpen }"
      />
    </span>
  </li>
</template>
