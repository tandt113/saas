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

const features = ref([
  {
    title: "Icons",
    description:
      "Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.",
    icon: "i-lucide-smile",
    to: "/docs/getting-started/integrations/icons",
  },
  {
    title: "Fonts",
    description:
      "Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.",
    icon: "i-lucide-a-large-small",
    to: "/docs/getting-started/integrations/fonts",
  },
  {
    title: "Color Mode",
    description:
      "Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.",
    icon: "i-lucide-sun-moon",
    to: "/docs/getting-started/integrations/color-mode",
  },
]);

const links: Ref<any[]> = ref([
  {
    label: "Explore components",
    to: "/docs/components/app",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right",
  },
]);
</script>
<template>
  <ClientOnly>
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
      <BlogPosts :posts="posts" :style="'grid'" />
    </UPageSection>
  </ClientOnly>
  <ClientOnly>
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
      <BlogPosts :posts="posts" />
    </UPageSection>
  </ClientOnly>
  <ClientOnly>
    <UPageSection
      title="Bài viết mới nhất"
      description="Khám phá các lựa chọn bất động sản đa dạng và phù hợp với nhu cầu của bạn."
      icon="i-lucide-rocket"
      orientation="vertical"
      v-wow="{
        from: { opacity: 0, y: 80 },
        to: {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
        },
      }"
    >
      <BlogPosts :posts="posts" :style="'grid'" />
    </UPageSection>
  </ClientOnly>
  <ClientOnly>
    <UPageSection
      title="Đối tác của chúng tôi"
      icon="i-lucide-rocket"
      orientation="vertical"
      v-wow="{
        from: { opacity: 0, y: 80 },
        to: {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
        },
      }"
    >
      <UPageLogos
        marquee
        :items="[
          'i-simple-icons-github',
          'i-simple-icons-discord',
          'i-simple-icons-x',
          'i-simple-icons-instagram',
          'i-simple-icons-linkedin',
          'i-simple-icons-facebook',
        ]"
      />
    </UPageSection>
  </ClientOnly>
  <UPageSection
    title="Tích hợp AI trong bất động sản"
    description="Khám phá cách trí tuệ nhân tạo đang thay đổi ngành bất động sản, từ việc tìm kiếm tài sản đến phân tích thị trường và dự đoán xu hướng."
    :links="links"
    icon="i-lucide-rocket"
    orientation="horizontal"
    :features="features"
  >
    <img
      src="https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/news/di-dong/ai-la-gi-cong-dung-cua-ai.jpg"
      width="352"
      height="400"
      alt="Illustration"
      class="w-full rounded-lg"
    />
  </UPageSection>
  <UPageSection
    title="Liên hệ với chúng tôi"
    description="Chúng tôi luôn sẵn sàng hỗ trợ bạn trong hành trình tìm kiếm bất động sản mơ ước. Hãy liên hệ với chúng tôi để được tư vấn và hỗ trợ nhanh chóng."
    icon="i-lucide-rocket"
  >
  </UPageSection>
</template>
<style scoped></style>
