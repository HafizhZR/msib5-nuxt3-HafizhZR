<template>
  <div class="relative flex mx-auto justify-center mb-16">
    <form action="Search" class="flex gap-2 flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row ">
      <div class="absolute flex top-3 pl-2">
        <Icon name="uil:search" color="gray" size="24" />
      </div>
      <input type="text" name="Search List" id="" placeholder="Search"
        class="w-[350px] h-[48px] sm:w-[450px]  xl:w-[612px] xl:h-[48px] border py-2 pl-10 bg-white rounded-lg">
      <div class="flex mx-auto">
        <button type="submit"
          class="py-[10px] px-[20px] w-[150px] h-[48px] flex justify-center items-center text-center text-[#101828] bg-white border rounded-lg font-semibold"><img
            class="pr-2" src="../assets/icons/Filter.png" alt="Filter">Sort by</button>
      </div>

    </form>
  </div>
</template>

<script lang="ts" setup>


</script>