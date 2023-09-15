<template>
  <div class="flex flex-col mx-auto box-border">
    <button class="w-26 h-26 lg:w-40 lg:h-40">
      <img :src="imageUrl" alt="Gambar" class="mx-auto flex" />
      <h6 class="mt-2 text-center">{{ name }}</h6>
    </button>
  </div>
</template>

<script setup lang="ts">
const { imageUrl, name } = defineProps({
  imageUrl: String,
  name: String
})
</script>
