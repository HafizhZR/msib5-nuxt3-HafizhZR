<template>
  <button class="mx-2">
    <div
      class="flex-col mx-auto box-border min-w-[150px] max-w-[230px] min-h-[380px] max-h-[380px] pb-1 h-[350px] sm:h-[400px] md:h-[400px] lg:h-[400px] xl:h-[400px] shadow-lg bg-white rounded-lg"
    >
      <img
        :src="products.image"
        alt="gambar"
        class="bg-[#F2F4F7] w-[230px] h-[200px] rounded-lg"
      />
      <div>
        <div class="m-6">
          <p class="px-2 py-1 rounded-2xl bg-[#F2F4F7] w-fit mb-4">Label</p>
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
import { TProduct } from '~/store'

const { products } = defineProps<{
  products: TProduct
}>()
</script>
