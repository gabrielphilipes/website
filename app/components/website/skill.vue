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

    <span
      class="flex-1 border-t border-dotted border-zinc-200 dark:border-zinc-600 mx-4"
    />

    <span
      class="text-xs text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 ph_transition"
    >
      {{ level }}
    </span>

    <p v-if="description && isOpen" class="w-full text-sm text-zinc-400">
      {{ description }}
    </p>

    <span
      v-if="description"
      @click="isOpen = !isOpen"
      class="flex items-center gap-1 w-full cursor-pointer text-sm text-zinc-400 hover:text-primary-500 ph_transition"
      :class="{ '!text-primary-500 mt-2': isOpen }"
    >
      {{ isOpen ? "Ocultar" : "Ver mais" }}
      <Icon
        name="heroicons:chevron-down"
        size="13"
        :class="{ 'rotate-180': isOpen }"
      />
    </span>
  </li>
</template>
