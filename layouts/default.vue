<template>
  <div>
    <AppHeader />
    <AppPrivacy />
    <AppOffline />
    <Nuxt class="min-h-screen" />
    <p class="static bottom-0 mb-2 px-5 text-gray-500">
      &copy; {{ year }} Jordan McDougall
    </p>
  </div>
</template>
<script>
export default {
  head() {
    return {
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-DKQYV6KT7N',
          async: true,
        },
      ],
    }
  },
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
  mounted() {
    window.dataLayer = window.dataLayer || []
    function gtag() {
      // eslint-disable-next-line no-undef
      dataLayer.push(arguments)
    }
    gtag('js', new Date())

    gtag('config', 'G-DKQYV6KT7N')
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
