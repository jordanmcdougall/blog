<template>
  <div class="container grid grid-cols-1 sm:max-w-sm md:max-w-4xl mx-auto z-10">
    <SocialHead
      title="Privacy"
      description="Our privacy notice and terms of use."
      image="/profile-picture.png"
    />
    <h1 class="px-5">{{ page.title }}</h1>
    <p class="px-5">Last Updated {{ page.updatedAt | formatDate }}</p>
    <nuxt-content
      class="font-serif text-xl text-left px-5 grid-rows-1"
      :document="page"
    />
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
      this.page = await this.$content('privacy/privacy').fetch()
    } catch (e) {
      this.$nuxt.error({ statusCode: 404 })
    }
    // if (this.page.length < 1) console.log(this.$nuxt)
    // error({ statusCode: 404, message: 'Post not found' })
  },
  head() {
    return {
      title: 'Privacy',
    }
  },
}
</script>
<style scoped>
h1 {
  @apply text-4xl;
}
h2 {
  @apply text-3xl;
}
h3 {
  @apply text-2xl;
}
h4 {
  @apply text-xl;
}
p {
  @apply mb-5;
}
ul {
  @apply mb-5;
  @apply list-disc;
  @apply px-5;
}

a:hover {
  @apply underline;
}
</style>
