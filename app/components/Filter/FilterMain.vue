<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";

const items: TabsItem[] = [
  {
    label: "Bán",
    icon: "i-lucide-dollar-sign",
  },
  {
    label: "Thuê",
    icon: "i-lucide-key",
  },
];
</script>

<template>
  <div class="w-full bg-slate-100/60 dark:bg-black/30 p-6 rounded-2xl shadow-lg">
    <UTabs :items="items" variant="link" :ui="{ trigger: 'grow' }" class="gap-4 w-full">
      <template #content="{ item }">
        <div class="flex flex-col gap-5">
          <div class="flex justify-between items-center gap-3">
            <UInput
              icon="i-lucide-search"
              size="xl"
              class="w-full"
              variant="outline"
              :ui="{
                root: 'focus-within:ring-0 rounded-xl',
                base:
                  'bg-slate-100/70 dark:dark:bg-black/40 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 border border-transparent focus:outline-none',
                leadingIcon: 'text-gray-500 dark:text-gray-400',
              }"
              placeholder="Search..."
            />
            <UButton icon="i-lucide-search" size="xl" color="primary" variant="solid"
              >Search</UButton
            >
          </div>
          <div class="flex gap-5">
            <UButton icon="i-lucide-home" size="xl" color="primary" variant="outline"
              >Property</UButton
            >
            <UButton
              icon="i-lucide-dollar-sign"
              size="xl"
              color="primary"
              variant="outline"
              >Price</UButton
            >
            <UButton icon="i-lucide-bed" size="xl" color="primary" variant="outline"
              >Bedroom</UButton
            >
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>
