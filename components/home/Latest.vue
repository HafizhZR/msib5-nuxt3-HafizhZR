<template>
  <div class="flex flex-col items-center mx-auto">
    <SubMenus :kategori="kategoriLatest" />
    <div class="xl:px-10 w-full">
      <div
        class="flex flex-col xl:flex-row justify-center mx-4 items-center xl:flex gap-6 xl:justify-center xl:items-center xl:ml-12"
      >
        <div
          class="mb-10 bg-[#28A0F6] w-[352px] h-[380px] xl:h-[494px] p-10 rounded-lg left-10 xl:block hidden"
        >
          <div class="flex-col mb-20">
            <p class="text-2xl text-white">Discount</p>
            <p class="text-5xl font-semibold text-white w-1/2">More and More</p>
          </div>
          <div class="flex-col">
            <p class="text-2xl text-white">Up To</p>
            <p class="text-7xl font-semibold text-[#FCE834]">50%</p>
          </div>
        </div>
        <div
          class="relative xl:z-[1] xl:mt-[-15px] xl:flex grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:flex-row justify-center items-center xl:gap-6 xl:ml-[-130px] mx-[-6px] md:mx-4"
        >
          <div v-for="product in productStore.getLatestProducts">
            <NuxtLink :to="`/product/${product.id}`">
              <CardProduct :key="product.id" class="mb-7" :products="product" />
            </NuxtLink>
          </div>
          <button
            class="absolute right-[-40px] top-[170px] hidden xl:inline-block"
          >
            <img src="../../assets/icons/Next.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '../../store/product.store'
import SubMenus from '../SubMenus.vue'

const kategoriLatest = 'Latest'
const productStore = useProductStore()
await productStore.fetchProducts()
await productStore.getLatestProducts
</script>
