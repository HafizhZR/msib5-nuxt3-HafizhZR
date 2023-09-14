import { defineStore } from "pinia";

export type TProduct = {
  id: number;
  title: string;
  price: number;
  category?: string;
  description?: string;
  image: string;
};

type ProductState = {
  products: TProduct[];
  detail: TProduct;
};

export const useProductStore = defineStore("product", {
  state: (): ProductState => ({
    products: [],
    detail: {
      id: 0,
      title: "",
      price: 0,
      image: ""
    },
  }),

  getters: {
    getLatestProducts(): TProduct[] {
      return this.products.slice(0, 4);
    },
    getFlashSaleProducts(): TProduct[] {
      return this.products.slice(0, 5);
    }
  },

  actions: {
    async fetchProducts() {
      try {
        const { data } = await useNuxtApp().$axios.get("/products");
        this.products = data;
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    },

    async detailProduct(id: number) {
      try {
        const { data } = await useNuxtApp().$axios.get(`/products/${id}`);
        this.detail = data;
      } catch (error) {
        console.error("Error fetching product detail:", error);
        throw error;
      }
    },

    async addToCart(product: TProduct) {
      try {
        const { data } = await useNuxtApp().$axios.post("/cart", product);
      } catch (error) {
        
      }
    }
  },
});
