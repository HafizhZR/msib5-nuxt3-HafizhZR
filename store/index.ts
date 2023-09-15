import { defineStore } from 'pinia'

export type TProduct = {
  id: number
  title: string
  price: number
  category?: string
  description: string
  image: string
}

export type TCart = {
  id: number
  title: string
  price: number
  quantity: number
  color: string
  image: string
}

type ProductState = {
  products: TProduct[]
  detail: TProduct
  cart: TCart
}

export const useProductStore = defineStore('product', {
  state: (): ProductState => ({
    products: [],
    detail: {
      id: 0,
      title: '',
      price: 0,
      image: '',
      category: '',
      description: ''
    },
    cart: {
      id: 0,
      title: '',
      price: 0,
      quantity: 0,
      color: '',
      image: ''
    }
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

    async fetchCarts() {
      try {
        const { data } = await useNuxtApp().$axios.get('/carts')
        this.cart = data
        console.log(data)
      } catch (error) {
        console.error('Error fetching cart data:', error)
      }
    }
  }
})
