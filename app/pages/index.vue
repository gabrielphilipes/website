<script setup lang="ts">
import Chatmix from "~/components/website/Portfolio/Chatmix.vue";
import type { WebsiteProjectType } from "~/types/website";

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

const contacts = [
  {
    name: "LinkedIn",
    icon: "mdi:linkedin",
    link: "https://www.linkedin.com/in/gabrielphilipes/",
  },
  {
    name: "E-mail",
    icon: "mdi:email",
    link: "mailto:gabriel@philipe.dev",
  },
  {
    name: "WhatsApp",
    icon: "mdi:whatsapp",
    link: "https://wa.me/5537991944989",
  },
];

const sonAge = (): number => {
  const sonBirthday = new Date("2022-05-08");
  const today = new Date();

  const diffInMilliseconds = today.getTime() - sonBirthday.getTime();

  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
  return Math.floor(diffInDays / 365);
};

const modal = ref<boolean>(false);
const selectedProject = ref<WebsiteProjectType | null>(null);
const openModal = (project: WebsiteProjectType) => {
  modal.value = true;
  selectedProject.value = project;
};

// Dark mode
const colorMode = useColorMode();
const isDark = ref<boolean>(colorMode.preference === "dark");
watch(colorMode, () => {
  isDark.value = colorMode.preference === "dark";
});
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
            alt="Gabriel Philipe Silva"
            class="size-40 rounded-full mx-auto md:mx-0"
          />

          <h1 class="text-3xl font-medium font-serif mt-4 dark:text-zinc-100">
            Gabriel Philipe Silva
          </h1>

          <div
            class="flex flex-wrap justify-center md:justify-start gap-2 my-2"
          >
            <WebsiteBadge text="Desenvolvedor Full Stack" />
            <WebsiteBadge text="Tech Lead" />
            <WebsiteBadge text="Empreendedor" />
          </div>

          <div
            class="flex flex-col gap-3 mt-10 text-zinc-500 dark:text-zinc-400"
          >
            <p>Transformo ideias em código e negócios digitais!</p>
            <p>
              Sempre atento às tendências de tecnologia, negócios e inovação.
              Além do código, exploro sobre design, carros e, ainda, passo
              bastante tempo brincando com meu filho (Danilo,
              {{ sonAge() }} anos).
            </p>
          </div>

          <div class="mt-10">
            <h2 class="section-title">Contato</h2>

            <nav class="flex flex-col -ml-2">
              <UButton
                v-for="contact in contacts"
                :key="contact.name"
                variant="link"
                color="neutral"
                :href="contact.link"
                target="_blank"
                class="hover:text-primary-500"
              >
                <Icon :name="contact.icon" class="size-5" />
                <span>{{ contact.name }}</span>
              </UButton>
            </nav>
          </div>
        </header>
      </aside>

      <div class="flex-1 flex flex-col mt-10 md:my-10">
        <div
          class="bg-zinc-100 dark:bg-zinc-800 py-10 md:py-5 md:rounded-l-lg xl:rounded-lg"
        >
          <div class="flex flex-col gap-4 w-11/12 mx-auto">
            <section>
              <h1 class="section-title">Sobre mim</h1>

              <div
                class="flex flex-col gap-4 font-sm text-zinc-500 dark:text-zinc-400"
              >
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

            <span class="divider" />

            <section>
              <h1 class="section-title">Conhecimentos</h1>

              <div class="grid grid-cols-1 gap-6 lg:grid-cols-10">
                <section
                  class="col-span-10 lg:col-span-6 lg:border-r border-zinc-200 dark:border-zinc-700 pr-5"
                >
                  <h2 class="text-lg font-medium font-serif mb-4">
                    Desenvolvimento
                  </h2>

                  <WebsiteHardSkillBlock />
                </section>

                <article class="col-span-10 lg:col-span-4">
                  <h2 class="text-lg font-medium font-serif mb-4">Cursos</h2>

                  <WebsiteCourses />
                </article>
              </div>
            </section>

            <span class="divider" />

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
          </div>
        </div>

        <footer
          class="flex flex-col gap-2 md:flex-row md:gap-0 justify-between items-center text-xs text-zinc-400 pr-5 xl:pr-0 my-10"
        >
          <div class="flex flex-col gap-2">
            <p>
              &copy; {{ new Date().getFullYear() }} Gabriel Philipe Silva. Todos
              os direitos reservados.
            </p>

            <UButton
              size="sm"
              variant="link"
              color="neutral"
              href="https://github.com/gabrielphilipes/website"
              target="_blank"
              class="-ml-2"
            >
              Código deste site :-)
            </UButton>
          </div>

          <USwitch
            unchecked-icon="i-lucide-moon"
            checked-icon="i-lucide-sun"
            v-model="isDark"
            :label="isDark ? 'Modo escuro' : 'Modo claro'"
            size="sm"
            @update:model-value="
              colorMode.preference = isDark ? 'dark' : 'light'
            "
            :ui="{
              label: 'text-xs text-zinc-400 cursor-pointer',
            }"
          />
        </footer>
      </div>
    </main>
  </div>
</template>

<style scoped>
@reference "../assets/css/general.css";

.section-title {
  @apply text-xl font-medium font-serif block mb-4 dark:text-white;
}

.divider {
  @apply w-full pt-10 mt-10 border-t border-zinc-200 dark:border-zinc-700;
}
</style>
