export default {
  target: 'static',
  ssr: false,
  head: {
    title: 'neofox.org',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {src: "/js/bootstrap.bundle.min.js", body: true},
      {src: "/js/script.js", body: true},
      {
        innerHTML: `
            <!-- Google Tag Manager -->
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M2XFZ8J');
            <!-- End Google Tag Manager -->`
      },
      {
        innerHTML: ` (function(d,t) {
        var BASE_URL="https://app.chatwoot.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.chatwootSDK.run({
            websiteToken: 'Yk6tmsF44caVrycunNFW1Nj2',
            baseUrl: BASE_URL
          })
        }
      })(document,"script");`,
        type: 'text/javascript',
        charset: 'utf-8',
      },
    ],
    __dangerouslyDisableSanitizers: ['script', 'innerHTML'],
  },
  css: ["@/assets/scss/style.scss"],
  plugins: ['~/plugins/filters','~/plugins/functions'],
  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sentry'
  ],
  sentry: {
    dsn: 'https://704d969eaaf1446c9447899468d31011@o559736.ingest.sentry.io/5694827',
    config: {
      // Add native Sentry config here
      // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/
    },
  },
  axios: {},
  content: {},
  build: {
    publicPath: process.env.BASE_URL || '',
    // extractCSS: true
  }
}
