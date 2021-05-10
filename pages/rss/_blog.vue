<template>
  <article>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  layout: 'rss',
  async asyncData({ $content, params }) {
    const page = await $content(`/${params.blog}`).fetch()
    return {
      page,
    }
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
      ],
    }
  },
}
</script>
