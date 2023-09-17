<template>
  <div>
    <div class="bg-gradient-to-b from-[#D8EEFD] to-white w-full">
      <div class="flex justify-center items-center mx-auto py-10">
        <NuxtLink
          class="items-center hidden sm:flex md:flex lg:flex xl:flex"
          @click="goBack"
          ><button
            class="absolute left-32 sm:left-16 md:left-16 lg:left-16 xl:left-32 border w-[90px] h-[40px] flex items-center justify-center font-semibold bg-white rounded-lg"
          >
            <span class="material-symbols-outlined"> arrow_back </span>Back
          </button></NuxtLink
        >
        <h1
          class="text-center text-[40px] leading-[56px] font-semibold tracking-[-0.8px] text-[#101828] my-10"
        >
          Product Detail
        </h1>
        <NuxtLink
          to="/checkout"
          class="items-center hidden sm:flex md:flex lg:flex xl:flex"
        >
          <button
            class="absolute right-32 sm:right-16 md:right-16 lg:right-16 xl:right-32 border w-[120px] h-[40px] flex justify-center items-center font-semibold bg-[#0984DD] text-white rounded-lg"
          >
            <span class="material-symbols-outlined"> add </span>Add to Cart
          </button>
        </NuxtLink>
      </div>
    </div>
    <div class="flex mx-2 lg:mx-20 mb-20 flex-col xl:flex-row">
      <div class="mb-10 flex flex-col xl:hidden mx-auto">
        <h1 class="text-[#101828] text-3xl font-semibold leading-[38px] mb-2">
          {{ productStore.detail.title }}
        </h1>
        <p class="text-[#0764A7] text-2xl font-semibold leading-[32px]">
          $ {{ productStore.detail.price }}
        </p>
      </div>
      <div
        class="flex flex-col w-full xl:w-1/2 justify-center items-center gap-3"
      >
        <div
          class="flex justify-center items-center bg-gray-100 rounded-lg w-[355px] sm:w-[555px] xl:w-[555px] h-60 sm:h-[400px] xl:h-[430px] mx-auto"
        >
          <img
            class="w-[255px] h-[255px] sm:w-[400px] sm:h-[400px] xl:w-[400px] xl:h-[430px]"
            :src="productStore.detail.image"
            alt=""
          />
        </div>
        <div class="justify-center items-center flex">
          <div class="flex gap-3">
            <img
              class="w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] xl:w-[130px] xl:h-[130px] bg-gray-100 rounded-lg"
              :src="productStore.detail.image"
              alt=""
            />
            <img
              class="w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] xl:w-[130px] xl:h-[130px] bg-gray-100 rounded-lg"
              :src="productStore.detail.image"
              alt=""
            />
            <img
              class="w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] xl:w-[130px] xl:h-[130px] bg-gray-100 rounded-lg"
              :src="productStore.detail.image"
              alt=""
            />
            <img
              class="w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] xl:w-[130px] xl:h-[130px] bg-gray-100 rounded-lg"
              :src="productStore.detail.image"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="w-full xl:w-1/2 flex flex-col">
        <div class="mb-10 hidden xl:flex xl:flex-col">
          <h1 class="text-[#101828] text-3xl font-semibold leading-[38px] mb-2">
            {{ productStore.detail.title }}
          </h1>
          <p class="text-[#0764A7] text-2xl font-semibold leading-[32px]">
            $ {{ productStore.detail.price }}
          </p>
        </div>
        <div
          class="mb-10 mt-10 xl:mt-0 flex flex-col mx-auto xl:mx-0 ml-2 sm:ml-12"
        >
          <p class="mb-2 text-[#667085]">Color</p>
          <div class="flex w-full xl:w-[75%] gap-3">
            <button
              class="w-1/3 flex border bg-[#EAECF0] focus:border-[#28A0F6] border-solid focus:border-2 px-2 py-2 font-semibold rounded-lg"
            >
              <div
                class="bg-[#F95016] w-[30px] h-[30px] rounded-full mr-2"
              ></div>
              <p class="flex justify-center items-center py-1">Orange</p>
            </button>
            <button
              class="w-1/3 flex border focus:border-[#28A0F6] border-solid focus:border-2 px-2 py-2 font-semibold rounded-lg"
            >
              <div
                class="bg-[#27AE60] w-[30px] h-[30px] rounded-full mr-2"
              ></div>
              <p class="flex justify-center items-center py-1">Green</p>
            </button>
            <button
              class="w-1/3 flex border bg-[#EAECF0] focus:border-[#28A0F6] border-solid focus:border-2 px-2 py-2 font-semibold rounded-lg"
            >
              <div
                class="bg-[#6172F3] w-[30px] h-[30px] rounded-full mr-2"
              ></div>
              <p class="flex justify-center items-center py-1">Purple</p>
            </button>
          </div>
        </div>
        <div class="mb-10 flex flex-col mr-auto xl:mx-0 ml-2 sm:ml-12">
          <p class="mb-2 text-[#667085]">Size</p>
          <div class="flex gap-3">
            <button
              class="border bg-[#EAECF0] focus:border-[#28A0F6] border-solid focus:border-2 font-semibold rounded-lg"
            >
              <div
                class="bg-[#F9FAFB] w-[40px] h-[40px] flex justify-center items-center rounded-lg"
              >
                S
              </div>
            </button>
            <button
              class="border bg-[#EAECF0] focus:border-[#28A0F6] border-solid focus:border-2 font-semibold rounded-lg"
            >
              <div
                class="bg-[#EAECF0] w-[40px] h-[40px] flex justify-center items-center rounded-lg"
              >
                M
              </div>
            </button>
            <button
              class="border bg-[#EAECF0] focus:border-[#28A0F6] border-solid focus:border-2 font-semibold rounded-lg"
            >
              <div
                class="bg-[#F9FAFB] w-[40px] h-[40px] flex justify-center items-center rounded-lg"
              >
                L
              </div>
            </button>
            <button
              class="border bg-[#EAECF0] focus:border-[#28A0F6] border-solid focus:border-2 font-semibold rounded-lg"
            >
              <div
                class="bg-[#EAECF0] w-[40px] h-[40px] flex justify-center items-center rounded-lg"
              >
                XL
              </div>
            </button>
          </div>
        </div>
        <div class="mb-10 flex flex-col mr-auto xl:mx-0 ml-2 sm:ml-12">
          <p class="mb-2 text-[#667085]">Quantity</p>
          <div class="flex gap-3">
            <button
              class="w-[40px] h-[40px] bg-[#EAECF0] rounded-lg font-xl"
              @click="decrement"
            >
              -
            </button>
            <input
              :v-model="quantity"
              :value="quantity"
              class="text-center w-[40px] h-[40px] bg-[#fff] border rounded-lg"
            />
            <button
              class="w-[40px] h-[40px] bg-[#0984DD] rounded-lg text-[#fff] font-2xl"
              @click="increment"
            >
              +
            </button>
          </div>
        </div>
        <div class="flex flex-col xl:mx-0 mx-2 sm:mx-12">
          <p class="mb-2 text-[#667085]">Description</p>
          <p class="font-[20px] font-semibold leading-[30px] text-[#262262]">
            {{ productStore.detail.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="relative">
      <NuxtLink
        to="/checkout"
        class="items-center fixed top-[625px] right-[-100px] flex sm:hidden lg:hidden xl:hidden"
      >
        <button
          class="absolute right-32 border w-[120px] h-[40px] flex justify-center items-center font-semibold bg-[#0984DD] text-white rounded-lg"
        >
          <span class="material-symbols-outlined"> add </span>Add to Cart
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '../../store/product.store'

const router = useRouter()
const idString = useRoute().params.id
const id = +idString
const quantity = ref(1)

const productStore = useProductStore()
await productStore.detailProduct(id)

const increment = () => {
  quantity.value++
}

const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const goBack = () => {
  router.go(-1)
}

definePageMeta({
  layout: 'user'
})
</script>
