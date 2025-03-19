<script setup lang="ts">
import type { WebsiteHardSkillType } from "~~/types/website";

defineProps<WebsiteHardSkillType>();
</script>

<template>
  <li
    class="flex items-center justify-between cursor-default group text-zinc-500 dark:text-zinc-400"
  >
    {{ name }}
    <span
      class="flex-1 border-t border-dotted border-zinc-300 dark:border-zinc-600 mx-2"
    />
    <span
      class="text-xs text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 group-hover:dark:text-zinc-400 ph_transition"
    >
      {{ level }}
    </span>
  </li>
</template>
