<template>
  <div class="flex flex-col mx-auto w-full h-full">
    <div class="bg-gradient-to-b from-[#D8EEFD] to-white">
      <h1 class="text-center text-[40px] leading-[56px] font-semibold tracking-[-0.8px] text-[#101828] py-10">Product List
      </h1>
      <SearchList />
    </div>
    <div class="mb-20 flex flex-col justify-center items-center mx-auto">
      <div
        class="grid justify-center items-center grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-8 lg:grid-cols-4 xl:grid-cols-5 xl:gap-6 xl:mx-16 mx-2">
        <div v-for="product in productStore.products">
          <NuxtLink :to="`/product/${product.id}`">
            <CardProduct :products="product" :key="product.id" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '../../store/index';

const productStore = useProductStore();

await productStore.fetchProducts();

definePageMeta({
  layout: 'user',
});
</script>
