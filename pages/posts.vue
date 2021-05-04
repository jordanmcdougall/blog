<template>
  <div>
    <SocialHead
      title="Posts"
      description="All posts on jordanmcdougall.dev"
      image="/profile-picture.png"
    />
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
        .sortBy('updatedAt', 'desc')
        .fetch()
    } catch (e) {
      this.$nuxt.error({ statusCode: 404 })
    }
  },
  head() {
    return {
      title: 'Posts',
    }
  },
}
</script>
