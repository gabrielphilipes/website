<script setup lang="ts">
// Dark mode
const colorMode = useColorMode();
const isDark = ref<boolean>(colorMode.preference === "dark");
watch(colorMode, () => {
  isDark.value = colorMode.preference === "dark";
});
</script>

<template>
  <div
    class="flex flex-col gap-y-7 md:flex-row md:gap-0 justify-between items-center"
  >
    <p class="text-sm text-zinc-400">
      &copy; {{ new Date().getFullYear() }} Gabriel Philipe Silva. Todos os
      direitos reservados.
    </p>

    <USwitch
      unchecked-icon="i-lucide-moon"
      checked-icon="i-lucide-sun"
      v-model="isDark"
      :label="isDark ? 'Modo escuro' : 'Modo claro'"
      size="sm"
      @update:model-value="colorMode.preference = isDark ? 'dark' : 'light'"
      :ui="{
        label: 'text-xs text-zinc-400 cursor-pointer',
      }"
    />
  </div>
</template>
