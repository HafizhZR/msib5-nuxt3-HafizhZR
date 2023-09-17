import { defineStore } from 'pinia'
import { TProduct } from './product.store'
import { useNuxtApp } from '#app'

export type TProductsCart = {
  productId: number
  quantity: number
}

export type TCart = {
  id: number
  userId: number
  date: Date
  products: TProductsCart[]
}

type TCartState = {
  cart: TCart
  productCart: TProduct[]
}

export const useCartStore = defineStore('cart', {
  state: (): TCartState => ({
    cart: {} as TCart,
    productCart: []
  }),
  getters: {
    getTotalPrice(): number {
      return this.productCart.reduce(
        (total, product) => total + product.price * product.qty,
        0
      )
    }
  },
  actions: {
    async fetchCarts() {
      try {
        const { data } = await useNuxtApp().$axios.get(
          'https://fakestoreapi.com/carts/1'
        )
        this.cart = data
        const productIdSet = new Set(
          this.productCart.map(product => product.id)
        )
        this.cart.products.forEach(async productItem => {
          if (!productIdSet.has(productItem.productId)) {
            const dataProduct = await useNuxtApp().$axios.get(
              `https://fakestoreapi.com/products/${productItem.productId}`
            )
            dataProduct.data.qty = productItem.quantity
            this.productCart.push(dataProduct.data)
          }
        })
      } catch (error) {
        console.error(error)
      }
    },

    REMOVE_CART(productId: number) {
      try {
        this.productCart = this.productCart.filter(
          product => product.id !== productId
        )
      } catch (error) {
        console.error(error)
      }
    }
  }
})
