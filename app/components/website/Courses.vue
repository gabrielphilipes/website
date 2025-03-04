<script setup lang="ts">
interface WebsiteCourseType {
  id: number;
  name: string;
  status: "finished" | "in-progress";
}

const courses: WebsiteCourseType[] = [
  {
    id: 1,
    name: "Curso de PHP",
    status: "finished",
  },
  {
    id: 2,
    name: "MBA em Gestão da Tecnologia, IA e Desenvolvimento Empresarial",
    status: "in-progress",
  },
];
</script>

<template>
  <ul class="flex flex-col gap-2">
    <li
      v-for="course in courses"
      :key="course.id"
      class="text-sm text-zinc-500 flex items-center gap-2 group"
      :class="[
        { 'cursor-wait': course.status === 'in-progress' },
        { 'cursor-default': course.status === 'finished' },
      ]"
    >
      <Icon
        :name="
          course.status === 'finished'
            ? 'fluent:checkbox-checked-20-filled'
            : 'ic:outline-timelapse'
        "
        :class="[
          'ph_transition !size-4',
          { 'group-hover:text-green-500': course.status === 'finished' },
          { 'group-hover:text-yellow-500': course.status === 'in-progress' },
        ]"
      />

      <span class="flex-1">{{ course.name }}</span>
    </li>
  </ul>
</template>
