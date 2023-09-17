<template>
  <button class="mx-2">
    <div
      class="flex-col mx-auto box-border w-[160px] h-[360px] sm:w-[230px] sm:h-[380px] md:w-[230px] md:h-[380px] lg:w-[230px] lg:h-[380px] xl:w-[230px] xl:h-[380px] pb-1 shadow-lg bg-white rounded-lg"
    >
      <img
        :src="products.image"
        alt="gambar"
        class="bg-[#F2F4F7] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[200px] xl:w-[200px] xl:h-[200px] rounded-lg mx-auto"
      />
      <div>
        <div class="m-6">
          <p
            class="px-2 py-1 rounded-2xl bg-[#F2F4F7] w-fit mb-4 text-left flex justify-start"
          >
            {{ products.category }}
          </p>
          <div>
            <h3 class="text-base mb-2 w-full text-left">
              {{
                products.title.length > 30
                  ? products.title.slice(0, 20) + '...'
                  : products.title
              }}
            </h3>
            <div class="flex justify-between items-center">
              <p class="font-bold">Rp{{ products.price }}</p>
              <p class="text-xs opacity-50">450ML</p>
            </div>
            <div class="flex gap-5">
              <p class="text-xs line-through opacity-50">
                Rp{{ products.price }}
              </p>
              <p class="text-xs text-[#B42318] bg-[#fff2f1] rounded-lg px-1">
                -10%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { TProduct } from '~/store/product.store'

const { products } = defineProps<{
  products: TProduct
}>()
</script>
