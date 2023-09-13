<template>
  <div class="xl:px-10 w-full">
    <div class="flex justify-between">
      <div class="flex justify-center items-center">
        <p class="font-semibold text-2xl ml-14 mr-4">
          {{ kategori }}
        </p>
      </div>
      <button class="text-[#0984DD] flex justify-center items-center gap-3 m-14 font-semibold text-lg">
        View all
        <img src="../assets/icons/Arrow.png" alt="">
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  kategori: String,
})

</script>