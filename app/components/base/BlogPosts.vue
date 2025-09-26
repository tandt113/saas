<script setup lang="ts">
interface BlogPost {
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  excerpt?: string;
  slug: string;
}

const props = defineProps<{
  posts: BlogPost[];
  style?: "grid" | "carousel";
}>();
</script>
<template>
  <UPageGrid v-if="props.style === 'grid'" class="w-full mx-auto">
    <UBlogPost
      v-for="(post, i) in props.posts"
      :key="post.slug"
      :title="post.title"
      :description="post.description"
      :image="post.thumbnail"
      :date="post.date"
      :to="post.slug"
      v-wow="{
        from: { opacity: 0, y: 24 },
        to: { opacity: 1, y: 0, duration: 1.2, delay: i * 0.05 },
      }"
    />
  </UPageGrid>
  <UCarousel
    v-else
    v-slot="{ item }"
    arrows
    :items="posts"
    class="w-full mx-auto"
    :ui="{ item: 'basis-1/3' }"
  >
    <UBlogPost
      :key="item.slug"
      :title="item.title"
      :description="item.description"
      :image="item.thumbnail"
      :date="item.date"
      :to="item.slug"
    />
  </UCarousel>
</template>
