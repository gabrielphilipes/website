<script setup lang="ts">
const contacts = [
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
  {
    name: "LinkedIn",
    icon: "mdi:linkedin",
    link: "https://www.linkedin.com/in/gabrielphilipes/",
  },
  {
    name: "GitHub",
    icon: "mdi:github",
    link: "https://github.com/gabrielphilipes",
  },
];

// Dark mode
const colorMode = useColorMode();
const isDark = ref<boolean>(colorMode.preference === "dark");
watch(colorMode, () => {
  isDark.value = colorMode.preference === "dark";
});

const title = "Olá 👋🏻";
const description = "Empreendedor, Tech Lead e Desenvolvedor Full Stack";

useSeoMeta({
  title,
  description,
});

defineOgImageComponent("SimpleBlog");
</script>

<template>
  <div class="h-screen w-screen">
    <main
      class="flex flex-wrap w-full lg:max-w-screen-md 2xl:max-w-screen-lg mx-auto"
    >
      <div class="flex flex-col mt-10 md:my-10">
        <article class="flex flex-col mb-10 justify-center items-center">
          <img
            src="/images/gabrielphilipes.webp"
            alt="Gabriel Philipe Silva"
            class="size-40 md:size-56 rounded-full mx-auto md:mx-0"
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

          <ul class="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
            <li
              v-for="contact in contacts"
              :key="contact.name"
              class="flex items-center space-x-2"
            >
              <UButton
                :icon="contact.icon"
                :label="contact.name"
                variant="link"
                color="neutral"
                :href="contact.link"
                target="_blank"
                size="sm"
                class="hover:text-primary-500"
              />
            </li>
          </ul>
        </article>

        <div class="bg-zinc-100 dark:bg-zinc-800 py-10 md:py-5 md:rounded-lg">
          <div class="flex flex-col gap-4 w-11/12 mx-auto">
            <section>
              <h1 class="section-title">Sobre mim</h1>

              <div
                class="flex flex-col gap-4 font-sm text-zinc-500 dark:text-zinc-400"
              >
                <p>
                  Meu primeiro contato com código foi aos 14 anos, e desde
                  então, nunca dexei tecnologia de lado. Durante minha
                  trajetória, atuei em áreas administrativas enquanto, como
                  freela, desenvolvia sites institucionais e sistemas internos,
                  até que decidi seguir de vez na programação, co-fundando um
                  SaaS.
                </p>

                <p>
                  Foram quatro anos empreendendo e construindo do zero um
                  sistema de chatbot, com foco em provedores de internet,
                  atendendo mais de 1.400 empresas e 5.000 usuários ativos, com
                  quase 750 mil mensagens trocadas diariamente. Como líder
                  técnico, trabalhei com Laravel, Vue.js, WebSockets, Swoole,
                  filas e gestão de servidores, além de adquirir grande
                  experiência em gestão de equipes, processos, suporte ao
                  cliente, marketing e vendas.
                </p>

                <p>
                  Após uma intensa jornada, tomei outra grande decisão: deixar a
                  empresa que ajudei a construir para explorar novas
                  oportunidades profissionais, ajudando a criar novos negócios!
                </p>

                <p>
                  <span class="font-medium">
                    Posso ajudar no seu projeto?
                  </span>

                  Entre em contato, vamos conversar! 😄🔥🚀
                </p>
              </div>
            </section>

            <span class="divider" />

            <section class="pb-5">
              <h1 class="section-title">Conhecimentos</h1>

              <div class="flex flex-col gap-6 justify-center">
                <section class="">
                  <h2 class="text-lg font-medium font-serif mb-4">
                    Desenvolvimento
                  </h2>

                  <WebsiteHardSkillBlock />
                </section>

                <article>
                  <h2 class="text-lg font-medium font-serif mb-4">Cursos</h2>

                  <WebsiteCourses />
                </article>
              </div>
            </section>
          </div>
        </div>

        <footer
          class="flex flex-col gap-2 md:flex-row md:gap-0 justify-between items-center text-xs text-zinc-400 pr-5 xl:pr-0 my-10"
        >
          <div class="flex flex-col gap-2 mb-10 md:mb-0">
            <p>
              &copy; {{ new Date().getFullYear() }} Gabriel Philipe Silva. Todos
              os direitos reservados.
            </p>
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
