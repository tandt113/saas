<script setup lang="ts">
import BlogPosts from "~/components/base/BlogPosts.vue";

const posts = ref([
  {
    title: "Nuxt Icon v1",
    description: "Discover Nuxt Icon v1!",
    thumbnail: "https://nuxt.com/assets/blog/nuxt-icon/cover.png",
    slug: "nuxt-icon-v1",
    date: "2024-11-25",
  },
  {
    title: "Nuxt 3.14",
    description: "Nuxt 3.14 is out!",
    slug: "nuxt-3-14",
    thumbnail: "https://nuxt.com/assets/blog/v3.14.png",
    date: "2024-11-04",
  },
  {
    title: "Nuxt 3.13",
    description: "Nuxt 3.13 is out!",
    slug: "nuxt-3-13",
    thumbnail: "https://nuxt.com/assets/blog/v3.13.png",
    date: "2024-08-22",
  },
  {
    title: "Nuxt 3.14",
    description: "Nuxt 3.14 is out!",
    slug: "nuxt-3-14",
    thumbnail: "https://nuxt.com/assets/blog/v3.14.png",
    date: "2024-11-04",
  },
  {
    title: "Nuxt 3.13",
    description: "Nuxt 3.13 is out!",
    slug: "nuxt-3-13",
    thumbnail: "https://nuxt.com/assets/blog/v3.13.png",
    date: "2024-08-22",
  },
  {
    title: "Nuxt 3.14",
    description: "Nuxt 3.14 is out!",
    slug: "nuxt-3-14",
    thumbnail: "https://nuxt.com/assets/blog/v3.14.png",
    date: "2024-11-04",
  },
  {
    title: "Nuxt 3.13",
    description: "Nuxt 3.13 is out!",
    slug: "nuxt-3-13",
    thumbnail: "https://nuxt.com/assets/blog/v3.13.png",
    date: "2024-08-22",
  },
  {
    title: "Nuxt 3.14",
    description: "Nuxt 3.14 is out!",
    slug: "nuxt-3-14",
    thumbnail: "https://nuxt.com/assets/blog/v3.14.png",
    date: "2024-11-04",
  },
  {
    title: "Nuxt 3.13",
    description: "Nuxt 3.13 is out!",
    slug: "nuxt-3-13",
    thumbnail: "https://nuxt.com/assets/blog/v3.13.png",
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
    v-wow="{
      from: { opacity: 0, x: 80 }, // lẻ: từ phải
      to: {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3,
      },
    }"
  >
    <div>
      <img
        src="https://ui.nuxt.com/_ipx/_/blocks/image4.png"
        alt="App screenshot"
        class="rounded-lg shadow-2xl ring ring-default"
      />
    </div>
  </UPageHero>
  <UPageSection
    title="Bất động sản dành cho bạn"
    description="Khám phá các lựa chọn bất động sản đa dạng và phù hợp với nhu cầu của bạn."
    icon="i-lucide-rocket"
    orientation="vertical"
    v-wow="{
      from: { opacity: 0, y: 80 }, // lẻ: từ dưới lên
      to: {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      },
    }"
  >
    <template #icon>
      <UIcon name="i-heroicons-star" />
    </template>
    <BlogPosts :posts="posts" :style="'grid'" />
  </UPageSection>
  <UPageSection
    title="Bất động sản nổi bật"
    description="Khám phá các lựa chọn bất động sản đa dạng và phù hợp với nhu cầu của bạn."
    icon="i-lucide-rocket"
    orientation="vertical"
    v-wow="{
      from: { opacity: 0, y: 80 }, // lẻ: từ dưới lên
      to: {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      },
    }"
  >
    <template #icon>
      <UIcon name="i-heroicons-star" />
    </template>
    <BlogPosts :posts="posts" />
  </UPageSection>
</template>
