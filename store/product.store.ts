import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'

export type TProduct = {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
  qty: number
}

type TProductState = {
  products: TProduct[]
  detail: TProduct
}

export const useProductStore = defineStore('product', {
  state: (): TProductState => ({
    products: [],
    detail: {} as TProduct
  }),

  getters: {
    getLatestProducts(): TProduct[] {
      return this.products.slice(0, 4)
    },
    getFlashSaleProducts(): TProduct[] {
      return this.products.slice(0, 5)
    }
  },

  actions: {
    async fetchProducts() {
      try {
        const { data } = await useNuxtApp().$axios.get('/products')
        this.products = data
      } catch (error) {
        console.error('Error fetching product data:', error)
      }
    },

    async detailProduct(id: number) {
      try {
        const { data } = await useNuxtApp().$axios.get(`/products/${id}`)
        this.detail = data
      } catch (error) {
        console.error('Error fetching product detail:', error)
        throw error
      }
    },
    async sortProducts(sort: string) {
      try {
        const { data } = await useNuxtApp().$axios.get(`/products?sort=${sort}`)
        this.products = data
        console.log(data)
      } catch (error) {}
      console.error('Error fetching sort product:', Error)
    }
  }
})
