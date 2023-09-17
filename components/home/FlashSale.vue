<template>
  <div class="flex flex-col justify-center items-center mx-auto">
    <div class="xl:px-10 w-full">
      <div class="flex justify-between">
        <div class="flex justify-center items-center">
          <p class="font-semibold text-2xl ml-14 mr-4">Flash Sale</p>
          <p
            class="bg-[#F04438] h-[30px] px-2 py-2 text-center items-center flex rounded-lg text-white"
          >
            00:12:12
          </p>
        </div>
        <button
          class="text-[#0984DD] flex justify-center items-center gap-3 m-14 font-semibold"
        >
          View all
          <img src="../../assets/icons/Arrow.png" alt="" />
        </button>
      </div>
    </div>
    <div
      class="relative grid grid-cols-2 justify-center items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:flex xl:justify-around mx-2 gap-2 xl:gap-6 xl:mx-16"
    >
      <div v-for="product in productStore.getFlashSaleProducts">
        <NuxtLink :to="`/product/${product.id}`">
          <CardProduct :key="product.id" class="mb-8" :products="product" />
        </NuxtLink>
      </div>
      <button class="absolute right-[-40px] top-[170px] hidden xl:inline-block">
        <img src="../../assets/icons/Next.png" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '../../store/product.store'

const productStore = useProductStore()

await productStore.fetchProducts()
await productStore.getFlashSaleProducts
</script>
../../store/product
