// const path = require('path')
import path from 'path'
const fs = require('fs').promises

let posts = []

const constructFeedItem = async (post, dir, hostname) => {
  const filePath = path.join(__dirname, `dist/rss/${post.slug}/index.html`)
  const content = await fs.readFile(filePath, 'utf8')
  const url = `${hostname}/${dir}/${post.slug}`
  return {
    title: post.title,
    id: url,
    link: url,
    description: post.description,
    content,
  }
}

const create = async (feed, args) => {
  const [filePath, ext] = args
  const hostname = 'https://jordanmcdougall.dev'
  feed.options = {
    title: 'jordanmcdougall.dev',
    description: 'Technology and its impact on society',
    link: `${hostname}/feed.${ext}`,
  }
  const { $content } = require('@nuxt/content')
  if (posts === null || posts.length === 0)
    posts = await $content(filePath).fetch()

  for (const post of posts) {
    const feedItem = await constructFeedItem(post, filePath, hostname)
    feed.addItem(feedItem)
  }
  return feed
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jordanmcdougall.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/universal-storage',
    '@nuxtjs/sitemap',
    '@nuxtjs/feed',
  ],

  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map((file) => (file.path === '/index' ? '/' : file.path))
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  tailwindcss: {
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  storage: {},

  sitemap: {
    hostname: 'https://jordanmcdougall.dev',
    path: '/sitemap.xml',
    gzip: false,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
  },

  feed: [
    {
      path: '/feed.xml',
      create,
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
      data: ['/', 'xml'],
    },
    {
      path: '/feed.json',
      create,
      cacheTime: 1000 * 60 * 15,
      type: 'json1',
      data: ['/', 'json'],
    },
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { text } = require('reading-time')(document.text)

        document.readingTime = text
      }
    },
  },
}
