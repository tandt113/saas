<script setup lang="ts">
const { $gsap } = useNuxtApp();

onMounted(() => {
  $gsap.to(".marquee", {
    xPercent: 100,
    repeat: -1,
    duration: 20,
    ease: "linear"
  })
})
</script>
<template>
<div class="relative overflow-hidden w-full  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
    <div class="marquee whitespace-nowrap text-md font-bold font-mono text-white flex items-center">
        <span class="mx-4">🏡</span>
        <span>Chào mừng bạn đến với thế giới bất động sản số 1 tại Việt Nam</span>
        <span class="mx-4">🌟</span>
    </div>
</div>
</template>
