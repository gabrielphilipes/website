<script setup lang="ts">
import type { WebsiteHardSkillType } from "~~/types/website";

const backEndSkills: WebsiteHardSkillType[] = [
  {
    id: 1,
    name: "PHP legado",
    level: "Avançado",
  },
  {
    id: 2,
    name: "Laravel",
    level: "Avançado",
  },
  {
    id: 3,
    name: "Swoole",
    level: "Intermediário",
  },
  {
    id: 4,
    name: "Node.js",
    level: "Iniciante",
  },
];

const frontEndSkills: WebsiteHardSkillType[] = [
  {
    id: 1,
    name: "Vue.JS",
    level: "Avançado",
  },
  {
    id: 2,
    name: "Nuxt (Full Stack)",
    level: "Intermediário",
  },
  {
    id: 3,
    name: "JavaScript ES6+",
    level: "Intermediário",
  },
  {
    id: 4,
    name: "TailwindCSS",
    level: "Avançado",
  },
];

const databaseSkills: WebsiteHardSkillType[] = [
  {
    id: 1,
    name: "MySQL / MariaDB",
    level: "Avançado",
  },
  {
    id: 2,
    name: "PostgreSQL",
    level: "Intermediário",
  },
  {
    id: 3,
    name: "Redis",
    level: "Intermediário",
  },
];

const toolsSkills: WebsiteHardSkillType[] = [
  {
    id: 1,
    name: "Docker",
    level: "Intermediário",
  },
  {
    id: 2,
    name: "WebSockets",
    level: "Intermediário",
  },
  {
    id: 3,
    name: "S3",
    level: "Intermediário",
  },
  {
    id: 4,
    name: "CI/CD Pipelines",
    level: "Intermediário",
  },
  {
    id: 5,
    name: "aaPanel",
    level: "Intermediário",
  },
  {
    id: 6,
    name: "Nginx",
    level: "Intermediário",
  },
];
</script>

<template>
  <div class="grid grid-cols-1 gap-x-20 2xl:gap-x-28 gap-y-10 md:grid-cols-2">
    <article class="flex flex-col gap-2">
      <h3 class="font-medium font-serif">Back-end</h3>

      <ul class="flex flex-col gap-2 text-sm text-zinc-500">
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

      <ul class="flex flex-col gap-2 text-sm text-zinc-500">
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

      <ul class="flex flex-col gap-2 text-sm text-zinc-500">
        <WebsiteHardSkillItem
          v-for="skill in databaseSkills"
          :key="skill.id"
          :name="skill.name"
          :level="skill.level"
        />
      </ul>
    </article>

    <article class="flex flex-col gap-2">
      <h3 class="font-medium font-serif">Ferramentas Gerais</h3>

      <div class="flex flex-wrap space-x-4 text-sm text-zinc-500">
        <span v-for="skill in toolsSkills" :key="skill.id">
          • {{ skill.name }}
        </span>
        <span>• E muito outros...</span>
      </div>
    </article>
  </div>
</template>
