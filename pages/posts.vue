<template>
  <div>
    <AppPost :page="page" />
  </div>
</template>

<script>
export default {
  filters: {
    formatDate(date) {
      return new Date(date).toDateString()
    },
  },
  data() {
    return {
      page: [],
    }
  },
  async fetch() {
    try {
      this.page = await this.$content()
        .only(['title', 'author', 'topic', 'updatedAt', 'description', 'slug'])
        .fetch()
    } catch (e) {
      this.$nuxt.error({ statusCode: 404 })
    }
  },
}
</script>
