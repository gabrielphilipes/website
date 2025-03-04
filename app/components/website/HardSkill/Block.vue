<script setup lang="ts">
import type { WebsiteHardSkillType } from "~~/types/website";

const backEndSkills: WebsiteHardSkillType[] = [
  {
    id: 1,
    name: "PHP Legado",
    level: "Avançado",
  },
];

const frontEndSkills: WebsiteHardSkillType[] = [
  {
    id: 1,
    name: "PHP Legado",
    level: "Avançado",
  },
];

const databaseSkills: WebsiteHardSkillType[] = [
  {
    id: 1,
    name: "MySQL",
    level: "Avançado",
  },
];

const toolsSkills: WebsiteHardSkillType[] = [
  {
    id: 1,
    name: "PHP Legado",
    level: "Avançado",
  },
];
</script>

<template>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <article class="flex flex-col gap-2">
      <h3 class="font-medium font-serif">Back-end</h3>

      <ul class="text-sm text-zinc-500">
        <WebsiteHardSkillItem
          v-for="skill in backEndSkills"
          :key="skill.id"
          :name="skill.name"
          :level="skill.level"
        />
      </ul>
    </article>

    <article class="flex flex-col gap-2">
      <h3 class="font-medium font-serif">Front-end</h3>

      <ul class="text-sm text-zinc-500">
        <WebsiteHardSkillItem
          v-for="skill in frontEndSkills"
          :key="skill.id"
          :name="skill.name"
          :level="skill.level"
        />
      </ul>
    </article>

    <article class="flex flex-col gap-2">
      <h3 class="font-medium font-serif">Banco de Dados</h3>

      <ul class="text-sm text-zinc-500">
        <WebsiteHardSkillItem
          v-for="skill in frontEndSkills"
          :key="skill.id"
          :name="skill.name"
          :level="skill.level"
        />
      </ul>
    </article>

    <article class="flex flex-col gap-2">
      <h3 class="font-medium font-serif">Ferramentas</h3>

      <ul class="text-sm text-zinc-500">
        <WebsiteHardSkillItem
          v-for="skill in frontEndSkills"
          :key="skill.id"
          :name="skill.name"
          :level="skill.level"
        />
      </ul>
    </article>
  </div>
</template>
