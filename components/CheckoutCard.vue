<template>
  <div>
    <div
      class="flex flex-col xl:flex-row gap-5 border rounded-lg border-[#EAECF0] w-[200px] xl:w-[800px] mx-auto"
    >
      <div class="w-[200px] h-[160px] xl:w-[300px] xl:h-[160px]">
        <img
          class="bg-[#F2F4F7] w-[200px] h-[160px] xl:w-[300px] xl:h-[160px]"
          src="../assets/images/Bottle.png"
          alt=""
        />
      </div>
      <div class="flex flex-col justify-between">
        <div class="flex flex-col xl:flex-row">
          <div class="my-4 mx-2 xl:mx-0">
            <p class="text-[#101828]">{{ name }}</p>
            <p class="text-[#98A2B3] text-sm">{{ colorName }}</p>
          </div>
          <div class="ml-0 xl:ml-60 my-4 mx-2 xl:mx-0">
            <p class="font-semibold text-[#101828] mx-2">Rp{{ price }}</p>
          </div>
        </div>
        <div class="flex justify-between my-4 mx-2">
          <p>Qty: {{ quantity }}</p>
          <button class="text-[#B42318] flex justify-center items-center gap-2">
            <img src="../assets/icons/Trash.png" alt="" />Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { name, colorName, price, quantity } = defineProps({
  name: String,
  colorName: String,
  price: Number,
  quantity: Number
})
</script>
