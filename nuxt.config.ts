import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],

  // Site-wide rendering: SSR for full HTML that Google and LLMs can crawl
  ssr: true,

  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#2563eb' },
        // Prevent AI image scrapers from training on portfolio assets
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        // Preload the hero image so LCP is fast (helps rankings)
        { rel: 'preload', as: 'image', href: '/hero-banner.png' },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        },
      ],
    },
  },

  vite: { plugins: [tailwindcss()] },
})
