// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'GITS Commerce',
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' }
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        
      ]
    }
  }
  
})

