<template>
  <div class="">
    <SocialHead
      title="Search"
      description="Search posts on jordanmcdougall.dev."
      image="/profile-picture.png"
    />
    <div class="mb-10 flex justify-center">
      <input
        v-model="searchQuery"
        class="px-5 h-10 border border-black rounded"
        type="text"
        placeholder="Type to search.."
      />
    </div>
    <AppPost v-if="articles" :page="articles" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: [],
    }
  },
  head() {
    return {
      title: 'Search',
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      try {
        this.articles = await this.$content()
          .limit(6)
          .search(searchQuery)
          .fetch()
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>
