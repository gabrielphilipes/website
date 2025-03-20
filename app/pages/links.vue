<script setup lang="ts">
const sonAge = () => {
  const sonBirthday = new Date("2022-05-08").getTime();
  const today = new Date().getTime();
  return Math.floor((today - sonBirthday) / (1000 * 60 * 60 * 24 * 365));
};

useSeoMeta({
  title: "Meus links",
  description: "Links úteis para você encontrar mais sobre mim",
});

defineOgImageComponent("SimpleBlog");
</script>

<template>
  <div class="h-screen w-screen flex flex-col">
    <main
      class="flex flex-1 flex-col md:flex-row py-10 w-10/12 max-w-5xl mx-auto"
    >
      <aside
        class="flex flex-col gap-4 mb-10 md:mb-0 md:sticky md:top-10 md:w-5/12"
      >
        <img
          alt="Gabriel Philipe Silva"
          title="Gabriel Philipe Silva"
          src="/images/gabrielphilipes.webp"
          class="size-40 md:size-56 rounded-full"
        />

        <h1
          class="text-3xl md:text-4xl font-medium font-serif dark:text-zinc-100"
        >
          Gabriel Philipe Silva
        </h1>

        <div class="flex flex-col gap-2">
          <p class="font-medium">
            Transformo ideias em código e negócios digitais!
          </p>
          <p>
            Sempre atento às tendências de tecnologia, negócios e inovação. Além
            do código, exploro sobre design, carros e, ainda, passo bastante
            tempo brincando com meu filho (Danilo, {{ sonAge() }} anos).
          </p>
        </div>
      </aside>

      <section class="md:flex-1 flex flex-col gap-4">
        <article>
          <h2 class="article-title">Fale comigo!</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UButton
              variant="link"
              to="https://wa.me/5537991944989"
              target="_blank"
              class="link-card"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="size-20 text-primary-500"
              >
                <path
                  fill="currentColor"
                  d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                />
              </svg>

              <div class="flex flex-col gap-1 text-zinc-900 dark:text-zinc-200">
                <h3 class="font-medium font-serif text-lg">WhatsApp</h3>
                <p class="text-sm">
                  Posso demorar a responder. Mas vamos conversar!
                </p>
              </div>
            </UButton>

            <UButton
              variant="link"
              to="https://www.linkedin.com/in/gabrielphilipes"
              target="_blank"
              class="link-card"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="size-20 text-[#0A66C2]"
              >
                <path
                  fill="currentColor"
                  d="M4.001 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5zm2.5 4a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-1 1h2v7.5h-2zm5.5.43c.584-.565 1.266-.93 2-.93c2.071 0 3.5 1.679 3.5 3.75v4.25h-2v-4.25a1.75 1.75 0 1 0-3.5 0v4.25h-2V10h2z"
                />
              </svg>

              <div class="flex flex-col gap-1 text-zinc-900 dark:text-zinc-200">
                <h3 class="font-medium font-serif text-lg">LinkedIn</h3>
                <p class="text-sm">
                  Ainda estou começando aqui, mas tenho muito a compartilhar.
                </p>
              </div>
            </UButton>
          </div>
        </article>
      </section>
    </main>

    <footer class="bg-gray-100 dark:bg-zinc-800">
      <div class="w-10/12 max-w-5xl mx-auto p-10 lg:px-0">
        <WebsiteFooterContent />
      </div>
    </footer>
  </div>
</template>

<style scoped>
@reference "~/assets/css/tailwind.css";

.article-title {
  @apply text-2xl font-medium font-serif block mb-4 text-zinc-900 dark:text-zinc-100;
}

.link-card {
  @apply flex items-center justify-between gap-4;
  @apply w-full rounded-xl !shadow-md hover:!shadow-lg px-6 py-4 cursor-pointer;
  @apply border border-zinc-100 dark:border-zinc-800;
}
</style>
