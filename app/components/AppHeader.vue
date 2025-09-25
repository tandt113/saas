<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const user = useState<any | null>("auth:user", () => null);

const items = computed(() => [
  {
    label: "Nhà đất bán",
    to: "/nha-dat-ban",
  },
  {
    label: "Nhà đất cho thuê",
    to: "/nha-dat-cho-thue",
  },
  {
    label: "Dự án",
    to: "/du-an",
  },
  {
    label: "Tin tức",
    to: "/tin-tuc",
  },
  {
    label: "Wiki BĐS",
    to: "/wiki-bds",
  },
  {
    label: "Phân tích đánh giá",
    to: "/phan-tich-danh-gia",
  },
  {
    label: "Danh bạ",
    to: "/danh-ba",
  },
]);

const itemsMenu = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Tổng quan",
      icon: "i-lucide-box",
    },
    {
      label: "Quản lí tin đăng",
      icon: "i-lucide-file-text",
    },
    {
      label: "Gói hội viên",
      icon: "i-lucide-credit-card",
    },
    {
      label: "Quản lý khách hàng",
      icon: "i-lucide-users",
    },
    {
      label: "Quản lý tin tài trợ",
      icon: "i-lucide-megaphone",
    },
  ],
  [
    {
      label: $t("logout"),
      icon: "i-lucide-log-in",
    },
    {
      label: "Trợ giúp",
      icon: "i-lucide-circle-help",
      disabled: true,
    },
  ],
]);
</script>

<template>
  <UHeader :ui="{ container: 'w-full max-w-none' }">
    <template #left>
     <div class="flex items-center gap-10">
      <NuxtLink to="/">
        <AppLogo class="w-auto h-5 shrink-0" />
      </NuxtLink>
       <UNavigationMenu :items="items" variant="link" />
     </div>
    </template>
   
    <template #right>
      <div class="flex items-center gap-5">
        <UColorModeButton />
        <UButton
          icon="i-lucide-log-in"
          color="neutral"
          variant="ghost"
          to="/login"
          class="lg:hidden"
        />
        <UIcon name="i-lucide-heart" class="size-5" />
        <UChip :text="5" size="2xl" color="error" variant="solid">
          <UIcon name="i-lucide-bell" class="size-5" />
        </UChip>
        <UPopover
          v-if="user"
          :content="{
            align: 'start',
            side: 'bottom',
            sideOffset: 8,
          }"
        >
          <div class="flex items-center gap-2">
            <UAvatar :src="user.thumbnail" />
            <span class="font-light">{{ user.firstName }} {{ user.lastName }}</span>
            <UIcon name="i-lucide-chevron-down" class="size-5" />
          </div>
          <template #content>
            <div class="rounded-md shadow-xl">
              <div
                class="px-6 py-4 border-b text-white rounded-t-md"
                style="
                  background-image: url('https://staticfile.batdongsan.com.vn/images/PIVOT/banner-menu-pivot.png');
                "
              >
                <div class="flex flex-col gap-2">
                  <span class="font-medium text-xl">Gói hội viên</span>
                  <span
                    ><span class="text-red-500">Tiết kiệm đến 39%</span> chi phí so với<br />
                    đăng tin/đẩy tin lẻ</span
                  >
                  <UButton label="Tìm hiểu thêm" class="w-fit" color="error"></UButton>
                </div>
              </div>
              <UNavigationMenu
                orientation="vertical"
                :items="itemsMenu"
                class="px-2.5 py-4 bg-white rounded-b-md"
              />
            </div>
          </template>
        </UPopover>
        <UButton
          v-if="!user"
          label="Sign in"
          color="neutral"
          variant="outline"
          to="/login"
          class="hidden lg:inline-flex"
        />
        <UButton
          v-if="!user"
          label="Sign up"
          color="neutral"
          trailing-icon="i-lucide-arrow-right"
          class="hidden lg:inline-flex"
          to="/signup"
        />
        <UButton
          v-if="user"
          label="Đăng tin"
          color="error"
          variant="outline"
          trailing-icon="i-lucide-plus"
          class="hidden lg:inline-flex"
        />
      </div>
    </template>
  </UHeader>
</template>
