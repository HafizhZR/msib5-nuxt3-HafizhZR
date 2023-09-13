<template>
  <div class="flex flex-col items-center mx-auto">
    <div class="mb-10 w-full">
      <SubMenus :kategori="categori" />
      <div
        class="grid grid-cols-2 mx-10 md:grid-cols-3 gap-8 lg:gap-0 lg:flex justify-center items-center lg:justify-around">
        <Card v-for="(kategori, index) in categories" :key="index" :imageUrl="kategori.imageUrl" :name="kategori.name" />
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import MensFashion from '../../assets/images/MensFashion.png';
import WomensFashion from '../../assets/images/WomensFashion.png';
import Bicycle from '../../assets/images/Bicycle.png'
import Handphone from '../../assets/images/Handphone.png'
import HobbiesAndCollections from '../../assets/images/Hobbies&Collections.png'
import HouseHold from '../../assets/images/HouseHold.png'
import SubMenus from '../SubMenus.vue'
import Card from '../CardCategories.vue';

const categori = 'Categories'

const categories = ref([
  {
    name: `Men's Fashion`,
    imageUrl: MensFashion,
  },
  {
    name: `Women's Fashion`,
    imageUrl: WomensFashion,
  },
  {
    name: 'Bicycle',
    imageUrl: Bicycle,
  },
  {
    name: 'Handphone',
    imageUrl: Handphone,
  },
  {
    name: 'Hobbies and Collections',
    imageUrl: HobbiesAndCollections,
  },
  {
    name: 'Household',
    imageUrl: HouseHold,
  },
]);
</script>
  