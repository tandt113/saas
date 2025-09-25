<script setup lang="ts">
const posts = ref([
  {
    title: "Nuxt Icon v1",
    description: "Discover Nuxt Icon v1!",
    image: "https://nuxt.com/assets/blog/nuxt-icon/cover.png",
    date: "2024-11-25",
  },
  {
    title: "Nuxt 3.14",
    description: "Nuxt 3.14 is out!",
    image: "https://nuxt.com/assets/blog/v3.14.png",
    date: "2024-11-04",
  },
  {
    title: "Nuxt 3.13",
    description: "Nuxt 3.13 is out!",
    image: "https://nuxt.com/assets/blog/v3.13.png",
    date: "2024-08-22",
  },
  {
    title: "Nuxt 3.14",
    description: "Nuxt 3.14 is out!",
    image: "https://nuxt.com/assets/blog/v3.14.png",
    date: "2024-11-04",
  },
  {
    title: "Nuxt 3.13",
    description: "Nuxt 3.13 is out!",
    image: "https://nuxt.com/assets/blog/v3.13.png",
    date: "2024-08-22",
  },
  {
    title: "Nuxt 3.14",
    description: "Nuxt 3.14 is out!",
    image: "https://nuxt.com/assets/blog/v3.14.png",
    date: "2024-11-04",
  },
  {
    title: "Nuxt 3.13",
    description: "Nuxt 3.13 is out!",
    image: "https://nuxt.com/assets/blog/v3.13.png",
    date: "2024-08-22",
  },
  {
    title: "Nuxt 3.14",
    description: "Nuxt 3.14 is out!",
    image: "https://nuxt.com/assets/blog/v3.14.png",
    date: "2024-11-04",
  },
  {
    title: "Nuxt 3.13",
    description: "Nuxt 3.13 is out!",
    image: "https://nuxt.com/assets/blog/v3.13.png",
    date: "2024-08-22",
  },
]);
</script>
<template>
  <UPageHero
    title="Ultimate Vue UI library"
    description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications."
    headline="New release"
    orientation="horizontal"
  >
    <img
      src="https://ui.nuxt.com/_ipx/_/blocks/image4.png"
      alt="App screenshot"
      class="rounded-lg shadow-2xl ring ring-default"
    />
  </UPageHero>

  <div class="py-5">
    <div class="py-5">
      <span class="font-bold text-2xl">Bất động sản dành cho bạn</span>
    </div>
    <UBlogPosts :posts="posts" />
  </div>
  <div class="py-5">
    <div class="py-5">
      <span class="font-bold text-2xl">Dự án bất động sản nổi bật</span>
    </div>
    <UCarousel
      v-slot="{ item }"
      arrows
      :items="posts"
      class="w-full mx-auto"
      :ui="{ item: 'basis-1/3' }"
    >
      <img :src="item.image" height="320" class="rounded-lg" />
    </UCarousel>
  </div>
  <div class="py-5">
    <div class="py-5">
      <span class="font-bold text-2xl">Bất động sản dành cho bạn</span>
    </div>
    <UBlogPosts :posts="posts" />
  </div>
  <div class="py-5">
    <div class="py-5">
      <span class="font-bold text-2xl">Tin tức bất động sản</span>
    </div>
    <UCarousel
      v-slot="{ item }"
      arrows
      :items="posts"
      class="w-full mx-auto"
      :ui="{ item: 'basis-1/3' }"
    >
      <img :src="item.image" height="320" class="rounded-lg" />
    </UCarousel>
  </div>
</template>
