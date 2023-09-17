<template>
  <div class="flex flex-col mx-auto w-full">
    <div class="bg-gradient-to-b from-[#D8EEFD] to-white w-full">
      <h1
        class="text-center text-[40px] leading-[56px] font-semibold tracking-[-0.8px] text-[#101828] py-10"
      >
        Shopping Cart
      </h1>
    </div>
    <div
      class="flex flex-col xl:flex-row mx-0 xl:mx-20 justify-between relative xl:static"
    >
      <div
        class="flex-col grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-5 w-full xl:w-2/3 mb-10 mx-auto"
      >
        <div v-for="product in cart.productCart">
          <CheckoutCard :product="product" />
        </div>
      </div>
      <div
        class="h-[160px] gap-2 flex flex-col border rounded-lg border-[#EAECF0] p-4 fixed bottom-0 xl:static w-full xl:w-1/3 bg-gray-100 xl:bg-white"
      >
        <div class="flex justify-between">
          <p>Sub Total</p>
          <p>${{ cart.getTotalPrice }}</p>
        </div>
        <div>
          <p class="w-full xl:w-[60%] text-[#98A2B3]">
            Shipping and taxes calculated at checkout
          </p>
        </div>
        <NuxtLink to="/checkout/success">
          <button
            class="bg-[#0984DD] text-white py-2 px-4 rounded-lg flex justify-center items-center gap-2 font-semibold"
          >
            <img src="../../assets/icons/ArrowWhite.png" alt="" />Checkout
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/store/cart.store'
const cart = useCartStore()

await cart.fetchCarts()

definePageMeta({
  layout: 'user'
})
</script>
