import defaultAxios from "axios";

export default defineNuxtPlugin(() => {
  const axios = defaultAxios.create({
    baseURL: "https://fakestoreapi.com",
    timeout: 5000,
  });

  return {
    provide: {
      axios,
    },
  };
});
