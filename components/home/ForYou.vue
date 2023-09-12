<template>
  <div class="mb-20 flex flex-col justify-center items-center mx-auto">
    <SubMenus :kategori="kategoriForYou"/>
    <div class="grid justify-center items-center grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-8 lg:grid-cols-4 xl:grid-cols-5 xl:gap-6 xl:mx-16 mx-2">
      <Card v-for="(data, index) in ForYou" :key="index" :imageUrl="data.imageUrl" :label="data.label" :judul="data.judul"
        :harga="data.harga" :hargaAsli="data.hargaAsli" :diskon="data.diskon" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Card from '../CardProduct.vue'
import Bottle from '../../assets/images/Bottle.png'
import SubMenus from '../SubMenus.vue'

const kategoriForYou = 'For You'

const ForYou = ref([
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