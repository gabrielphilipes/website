<script setup lang="ts">
import { WebsiteProjectCard } from "#components";
import Chatmix from "~/components/website/Portfolio/Chatmix.vue";
import type { WebsiteProject } from "~/types/website";

const projects = [
  {
    id: 1,
    title: "Titulo",
    description: "Descrição",
    component: Chatmix,
    image: "https://placehold.co/600x400",
    views: 100,
  },
  {
    id: 2,
    title: "Titulo",
    description: "Descrição",
    component: Chatmix,
    image: "https://placehold.co/600x400",
    views: 100,
  },
];

const skills = [
  {
    id: 1,
    name: "HTML",
    description: "Descrição",
    level: "Avançado",
  },
  {
    id: 2,
    name: "CSS",
    level: "Avançado",
  },
];

const courses = [
  {
    id: 1,
    name: "Graduação XPTO",
    level: "Concluído",
  },
  {
    id: 2,
    name: "Curso XPTO",
    description: "Descrição",
    level: "Concluído",
  },
];

const contacts = [
  {
    id: 1,
    name: "LinkedIn",
    icon: "mdi:linkedin",
    link: "https://www.linkedin.com/in/gabrielphilipes/",
  },
  {
    id: 2,
    name: "E-mail",
    icon: "mdi:email",
    link: "mailto:gabriel@philipe.dev",
  },
  {
    id: 3,
    name: "WhatsApp",
    icon: "mdi:whatsapp",
    link: "https://wa.me/5537991944989",
  },
];

const sonAge = (): number => {
  const sonBirthday = new Date("2023-05-08");
  const today = new Date();
  const age = today.getFullYear() - sonBirthday.getFullYear();
  return age;
};

const modal = ref<boolean>(false);
const selectedProject = ref<WebsiteProject | null>(null);
const openModal = (project: WebsiteProject) => {
  modal.value = true;
  selectedProject.value = project;
};
</script>

<template>
  <div class="h-screen w-screen">
    <main class="flex flex-wrap w-full max-w-screen-xl mx-auto">
      <a
        href="https://github.com/gabrielphilipes/website"
        class="w-full bg-red-500 text-white py-4 font-serif text-center hover:bg-red-600 xl:rounded-b-xl"
      >
        <span class="font-medium">Site em construção!</span> Clique aqui para
        acessar o GitHub e acompanhar o progresso 😊
      </a>

      <aside
        class="w-11/12 mx-auto md:w-1/3 md:mx-0 px-4 md:pl-6 md:pr-10 mt-10 relative"
      >
        <header class="flex flex-col items-center md:items-start sticky top-4">
          <img
            src="https://placehold.co/600x600"
            alt="Portfólio"
            class="size-40 rounded-full mx-auto md:mx-0"
          />

          <h1 class="text-3xl font-medium font-serif mt-4">
            Gabriel Philipe Silva
          </h1>

          <div
            class="flex flex-wrap justify-center md:justify-start gap-2 my-2"
          >
            <WebsiteBadge text="Desenvolvedor Full Stack" />
            <WebsiteBadge text="Tech Lead" />
            <WebsiteBadge text="Empreendedor" />
          </div>

          <div class="flex flex-col gap-3 mt-10 text-zinc-500">
            <p>Transformo ideias em código e negócios digitais!</p>
            <p>
              Sempre atento às tendências de tecnologia, negócios e inovação.
              Além do código, exploro sobre design, carros e brincar com meu
              filho (Danilo, {{ sonAge() }} anos).
            </p>
          </div>

          <div class="mt-10">
            <h2 class="section-title">Contato</h2>

            <ul class="flex flex-col gap-2 text-sm text-zinc-500">
              <li v-for="contact in contacts" :key="contact.id">
                <a
                  :href="contact.link"
                  class="flex items-center gap-2 hover:text-zinc-700"
                  target="_blank"
                >
                  <Icon :name="contact.icon" class="size-5" />
                  <span>{{ contact.name }}</span>
                </a>
              </li>
            </ul>
          </div>
        </header>
      </aside>

      <div class="flex-1 flex flex-col mt-10 md:my-10">
        <div class="bg-zinc-100 py-10 md:py-5 md:rounded-l-lg xl:rounded-lg">
          <div class="flex flex-col gap-4 w-11/12 mx-auto">
            <section>
              <h1 class="section-title">Portfólio</h1>

              <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <WebsiteProjectCard
                  v-for="project in projects"
                  @click="openModal(project)"
                  :key="project.id"
                  :title="project.title"
                  :description="project.description"
                  :image="project.image"
                  :views="project.views"
                />
              </div>

              <UModal
                :ui="{ content: '!w-full !max-w-screen-lg' }"
                v-model:open="modal"
                :title="selectedProject?.title"
              >
                <template #body>
                  <WebsiteModalLayout>
                    <component
                      :is="selectedProject?.component"
                      :project="selectedProject"
                    />
                  </WebsiteModalLayout>
                </template>
              </UModal>

              <span class="text-xs text-zinc-400 italic block mt-5">
                * Existem, ainda, projetos que não podem ser divulgados por
                força de contrato.
              </span>
            </section>

            <span class="divider" />

            <section>
              <h1 class="section-title">Conhecimentos</h1>

              <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <article>
                  <h2 class="text-lg font-medium font-serif mb-4">
                    Stack de Desenvolvimento
                  </h2>

                  <ul class="flex flex-wrap gap-2">
                    <WebsiteSkill
                      v-for="skill in skills"
                      :key="skill.id"
                      :name="skill.name"
                      :description="skill.description"
                      :level="skill.level"
                    />
                  </ul>
                </article>

                <article>
                  <h2 class="text-lg font-medium font-serif mb-4">Cursos</h2>

                  <ul class="flex flex-wrap gap-2">
                    <WebsiteSkill
                      v-for="course in courses"
                      :key="course.id"
                      :name="course.name"
                      :description="course.description"
                      :level="course.level"
                    />
                  </ul>
                </article>
              </div>
            </section>

            <span class="divider" />

            <section>
              <h1 class="section-title">Sobre mim</h1>

              <div class="flex flex-col gap-4 font-sm text-zinc-500">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus reiciendis molestiae velit iure blanditiis voluptate
                  dolorum adipisci est rerum amet ipsam distinctio, omnis,
                  labore ad minus voluptatibus architecto tempore commodi!
                </p>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus reiciendis molestiae velit iure blanditiis voluptate
                  dolorum adipisci est rerum amet ipsam distinctio, omnis,
                  labore ad minus voluptatibus architecto tempore commodi!
                </p>

                <p>
                  <span class="font-medium">Posso te ajudar?</span>
                  Entre em contato e vamos conversar 😄🔥🚀
                </p>
              </div>
            </section>
          </div>
        </div>

        <footer
          class="flex flex-col gap-2 md:flex-row md:gap-0 justify-between items-center text-xs text-zinc-400 px-5 my-10"
        >
          <p>
            &copy; {{ new Date().getFullYear() }} Gabriel Philipe Silva. Todos
            os direitos reservados.
          </p>

          <a
            href="https://github.com/gabrielphilipes/website"
            target="_blank"
            class="hover:text-zinc-500"
          >
            Código deste site :-)
          </a>
        </footer>
      </div>
    </main>
  </div>
</template>

<style scoped>
@reference "../assets/css/general.css";

.section-title {
  @apply text-xl font-medium font-serif block mb-4;
}

.divider {
  @apply w-full pt-10 mt-10 border-t border-zinc-200;
}
</style>
