<template>
  <div>
    <div
      class="flex flex-col xl:flex-row gap-5 border rounded-lg border-[#EAECF0] w-[200px] h-[400px] xl:h-[160px] xl:w-[800px] mx-auto"
    >
      <div class="w-[160px] h-[160px] xl:w-[300px] xl:h-[160px] mx-auto">
        <img
          class="bg-[#F2F4F7] w-[160px] h-[160px] rounded-lg mx-auto"
          :src="product.image"
          alt=""
        />
      </div>
      <div class="flex flex-col justify-between w-full mx-auto xl:w-2/3">
        <div class="flex flex-col xl:flex-row w-full justify-between">
          <div class="my-4 mx-2 xl:mx-0 w-full px-2">
            <p class="text-[#101828] hidden xl:flex">
              {{ product.title }}
            </p>
            <p class="text-[#101828] flex xl:hidden">
              {{
                product.title.length > 30
                  ? product.title.slice(0, 20) + '...'
                  : product.title
              }}
            </p>
            <p class="text-[#98A2B3] text-sm">Color Name</p>
          </div>
          <div class="my-4 mx-2 xl:mx-0">
            <p class="font-semibold text-[#101828] mx-2">
              ${{ product.price }}
            </p>
          </div>
        </div>
        <div class="flex justify-between my-4 px-4 xl:px-2">
          <p>Qty: {{ product.qty }}</p>
          <button
            class="text-[#B42318] flex justify-center items-center gap-2"
            @click="cart.REMOVE_CART(product.id)"
          >
            <img src="../assets/icons/Trash.png" alt="" />Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/store/cart.store'

const { product } = defineProps(['product'])
const cart = useCartStore()
</script>
