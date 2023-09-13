<template>
  <div>
    <div class="bg-gradient-to-b from-[#D8EEFD] to-white w-full">
      <HomeJumbotron />
    </div>
    <div>
      <HomeCategories />
      <HomeFlashSale />
      <HomeLatest />
      <HomePromo />
      <HomeLatest />
      <HomeLatest />
      <HomeForYou />
      <NewsLetter />
    </div>
  </div>
</template>
  
<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

</script>
  