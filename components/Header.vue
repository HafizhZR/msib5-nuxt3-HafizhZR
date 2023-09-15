<template>
  <div class="flex justify-between mx-12 lg:mx-24 py-5">
    <div class="flex">
      <NuxtLink to="/"
        ><button>
          <img src="../assets/images/LogoGITS.png" alt="Logo" /></button
      ></NuxtLink>
      <div class="gap-x-8 lg:flex ml-10 items-center hidden">
        <NuxtLink to="/">
          <button class="flex font-semibold">Home</button>
        </NuxtLink>
        <NuxtLink to="/product">
          <button class="flex font-semibold">
            Products<span class="material-symbols-outlined">expand_more</span>
          </button>
        </NuxtLink>
        <button class="flex font-semibold">
          Categories<span class="material-symbols-outlined">expand_more</span>
        </button>
      </div>
    </div>

    <button class="lg:hidden" @click="toggleMobileMenu">
      <span class="material-symbols-outlined"> menu </span>
    </button>

    <div
      class="lg:hidden mt-3 flex flex-col"
      :class="{
        'absolute right-10 top-12 bg-[#ffffff] p-3 rounded-lg':
          isMobileMenuOpen,
        hidden: !isMobileMenuOpen
      }"
    >
      <NuxtLink to="/" class="flex mb-3 justify-center">
        <button class="block mb-2">Home</button>
      </NuxtLink>
      <NuxtLink to="/product" class="flex mb-3 justify-center">
        <button class="mb-2 flex">
          Products<span class="material-symbols-outlined">expand_more</span>
        </button>
      </NuxtLink>
      <button class="flex mb-3 justify-center">
        Categories<span class="material-symbols-outlined">expand_more</span>
      </button>
      <button class="flex mb-3 justify-center">Log in</button>
      <button class="flex mb-3 justify-center">Sign up</button>
    </div>

    <div class="hidden lg:flex gap-x-3">
      <button
        class="px-5 py-1 hover:bg-white rounded-lg font-semibold text-[#475467]"
      >
        Log in
      </button>
      <button
        class="bg-[#0984DD] px-[18px] py-[10px] rounded-lg text-[#f8feff] font-semibold hover:bg-sky-700"
      >
        Sign up
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>
