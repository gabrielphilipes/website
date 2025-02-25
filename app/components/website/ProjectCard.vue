<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image: string;
  views: number;
}>();
</script>

<template>
  <article class="flex flex-col gap-4 group">
    <a href="#" class="rounded-lg overflow-hidden">
      <img
        :src="image"
        :alt="title"
        :title="title"
        class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 ph_transition"
      />
    </a>

    <div class="flex justify-between items-center">
      <header>
        <a href="#" class="rounded-lg overflow-hidden">
          <h2 class="font-medium font-serif">{{ title }}</h2>
        </a>

        <p
          class="text-xs text-zinc-400 group-hover:text-zinc-500 ph_transition"
        >
          {{ description }}
        </p>
      </header>

      <span
        class="flex items-center gap-1 text-xs text-zinc-400 group-hover:text-zinc-500 ph_transition"
      >
        <Icon name="mdi:eye" class="size-4" /> {{ views }} visualizações
      </span>
    </div>
  </article>
</template>
