<template>
  <div class="flex flex-col justify-center items-center mx-auto">
    <div class="xl:px-10 w-full">
      <div class="flex justify-between">
        <div class="flex justify-center items-center">
          <p class="font-semibold text-2xl ml-14 mr-4">
            Flash Sale
          </p>
          <p class="bg-[#F04438] h-[30px] px-2 py-2 text-center items-center flex rounded-lg text-white">
            00:12:12
          </p>
        </div>
        <button class="text-[#0984DD] flex justify-center items-center gap-3 m-14 font-semibold">
          View all
          <img src="../../assets/icons/Arrow.png" alt="">
        </button>
      </div>
    </div>
    <div
      class="relative grid grid-cols-2 justify-center items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:flex xl:justify-around mx-2 gap-2 xl:gap-6 xl:mx-16">
      <Card class="mb-8" v-for="(data, index) in flashSale" :key="index" :imageUrl="data.imageUrl" :label="data.label"
        :judul="data.judul" :harga="data.harga" :hargaAsli="data.hargaAsli" :diskon="data.diskon" />
      <button class="absolute right-[-40px] top-[170px] hidden xl:inline-block">
        <img src="../../assets/icons/Next.png" alt="">
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Card from '../../components/CardProduct.vue'
import Bottle from '../../assets/images/Bottle.png'
import Sepatu from '../../assets/images/Sepatu.png'

const flashSale = ref([
  {
    imageUrl: Bottle,
    label: 'Label',
    judul: 'UX review presentations',
    harga: 36000,
    hargaAsli: 40000,
    diskon: 10,
  },
  {
    imageUrl: Sepatu,
    label: 'Label',
    judul: 'UX review presentations',
    harga: 36000,
    hargaAsli: 40000,
    diskon: 10,
  },
  {
    imageUrl: Bottle,
    label: 'Label',
    judul: 'UX review presentations',
    harga: 36000,
    hargaAsli: 40000,
    diskon: 10,
  },
  {
    imageUrl: Bottle,
    label: 'Label',
    judul: 'UX review presentations',
    harga: 36000,
    hargaAsli: 40000,
    diskon: 10,
  },
  {
    imageUrl: Bottle,
    label: 'Label',
    judul: 'UX review presentations',
    harga: 36000,
    hargaAsli: 40000,
    diskon: 10,
  },

])
</script>