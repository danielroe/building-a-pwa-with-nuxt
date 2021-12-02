export default {
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  css: ['~/assets/main.css'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/pwa'],

  plugins: ['~/plugins/analytics.client.js'],

  serverMiddleware: [
    {
      path: '/api/slow',
      handler: '~/api/slow',
    },
  ],

  pwa: {
    meta: {
      name: 'Building a PWA with Nuxt',
      description:
        "We're building a PWA with Nuxt at the eCommerce Tech Summit!",
      theme_color: '#00DC82',
    },
    manifest: {
      name: 'Building a PWA with Nuxt',
      short_name: 'Nuxt PWA',
    },
    workbox: {
      // enabled: true,
      // config: {
      //   debug: true,
      // },
      runtimeCaching: [
        {
          urlPattern: '/api/.*',
          handler: 'StaleWhileRevalidate',
        },
      ],
    },
  },
}
