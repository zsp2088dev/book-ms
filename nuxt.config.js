export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Book MS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '書籍管理システムへようこそ。ログインして研究室にある書籍を確認してみましょう。'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32×32',
        href: '/favicon-32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '48×48',
        href: '/favicon-48.png'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui', '@/plugins/firebase', '@/plugins/books'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    middleware: 'authenticated'
  }
}
