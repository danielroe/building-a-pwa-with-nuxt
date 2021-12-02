export default {
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  css: ['~/assets/main.css'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/pwa'],

  pwa: {
    meta: {
      name: 'Building a PWA with Nuxt',
      theme_color: '#00DC82',
    },
    manifest: {
      name: 'Building a PWA with Nuxt',
      short_name: 'Nuxt PWA',
    },
    // workbox
  },
}
