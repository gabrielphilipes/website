<script setup lang="ts">
import type { WebsiteProject } from "~/types/website";

defineProps<{
  project: WebsiteProject;
}>();
</script>

<template>
  <div>
    <h1>Portfolio</h1>
    <pre>{{ project }}</pre>
  </div>
</template>
