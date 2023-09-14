<template>
  <div class="mb-20 flex flex-col justify-center items-center mx-auto">
    <SubMenus :kategori="kategoriForYou" />
    <div
      class="grid justify-center items-center grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-8 lg:grid-cols-4 xl:grid-cols-5 xl:gap-6 xl:mx-16 mx-2">
      <div v-for="product in productStore.products">
        <CardProduct :products="product" :key="product.id" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useProductStore } from '../../store/index';
import SubMenus from '../SubMenus.vue'

const kategoriForYou = 'For You'
const productStore = useProductStore();
await productStore.fetchProducts();
</script>