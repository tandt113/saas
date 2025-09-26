<template>
  <div class="relative w-full p-10 overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-r from-indigo-500 from-[10%] via-sky-500 via-[50%] to-emerald-500 to-[90%] dark:from-neutral-900 dark:via-neutral-700 dark:to-neutral-900"
      style="z-index: 1"
    ></div>
    <div
      class="absolute inset-0"
      style="
        background-image: url('https://images.pexels.com/photos/1136452/pexels-photo-1136452.jpeg');
        background-size: cover;
        background-position: center;
        opacity: 0.4;
        z-index: 2;
      "
    ></div>
    <div class="relative z-10">
      <ClientOnly>
        <UPageHero
          :ui="{
            title: 'text-white',
            description: 'text-white/90',
            headline: 'text-white/80',
          }"
          title="Ultimate Vue UI library"
          description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications."
          headline="New release"
          orientation="horizontal"
          v-wow="{
            from: { opacity: 0, x: 80 },
            to: {
              opacity: 1,
              x: 0,
              duration: 1.2,
              ease: 'power3.out',
              delay: 0.3,
            },
          }"
        >
          <template #default>
            <FilterMain />
          </template>
        </UPageHero>
      </ClientOnly>
    </div>
  </div>
</template>
