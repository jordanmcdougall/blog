<template>
  <div class="">
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
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('/')
        .limit(6)
        .search(searchQuery)
        .fetch()
    },
  },
}
</script>
