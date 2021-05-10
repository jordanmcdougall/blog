<template>
  <div class="container grid grid-cols-1 sm:max-w-sm md:max-w-4xl mx-auto z-10">
    <SocialHead
      :title="page.title"
      :description="page.description"
      :image="page.image"
    />
    <h1 class="grid-rows-1 font-serif text-5xl px-10">{{ page.title }}</h1>
    {{ page }}
    <h2 class="grid-rows-1 text-gray-600 text-left px-10 mb-10 subtitle">
      {{ page.description }}
    </h2>
    <span class="grid grid-rows-1 grid-cols-2">
      <post-info
        :date="page.updatedAt"
        :author="page.author"
        :reading-time="page.readingTime"
        class="grid-rows-1 col-start-1 col-end-3 float-left px-10"
      />
      <div
        class="flex col-end-7 col-span-2 items-center justify-items-end grid mr-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-5 w-5 cursor-pointer"
          @click="sharePost()"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
      </div>
    </span>
    <figure>
      <img :src="page.image" alt="page.title" class="px-10 mx-auto" />
      <figcaption class="px-10 pb-10 text-gray-600 italic">
        {{ page.image_desc }}
      </figcaption>
    </figure>
    <h2 class="px-10 font-serif">Table of Contents</h2>
    <ul>
      <li
        v-for="link in page.toc"
        :key="link.id"
        :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
      >
        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      </li>
    </ul>

    <nuxt-content
      class="font-serif text-xl text-justify px-5 grid-rows-1 pb-10"
      :document="page"
    />
    <!--https://undraw.co/illustrations-->
    <LazyAppSupport />
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: [],
    }
  },
  async fetch() {
    try {
      this.page = await this.$content(this.$route.params.slug).fetch()
    } catch (e) {
      this.$nuxt.error({ statusCode: 404 })
    }
    // if (this.page.length < 1) console.log(this.$nuxt)
    // error({ statusCode: 404, message: 'Post not found' })
  },
  head() {
    return {
      title: this.page.title,
    }
  },
  methods: {
    sharePost() {
      if (navigator.share) {
        navigator.share({
          title: this.page.title,
          url: 'https://jordanmcdougall.dev' + this.$route.path,
        })
        // .catch(console.error('oops'))
      } else {
        console.error('failed to share')
      }
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

h2:not(.subtitle) {
  padding: auto;
  @apply text-3xl;
  @apply font-bold;
  @apply mb-5;
}

h3 {
  padding: auto;
  @apply text-xl;
  @apply font-bold;
  @apply mb-5;
}

p {
  @apply mb-5;
}

ul {
  @apply mb-5;
  @apply list-disc;
  @apply px-16;
}

ol {
  @apply mb-5;
  @apply list-decimal;
  @apply px-6;
}

.toc2 {
  @apply text-xl;
}

a:hover {
  @apply underline;
  @apply cursor-pointer;
}

figcaption {
  margin-top: 0;
}

h2:not(.subtitle):hover > a > .icon.icon-link {
  background-image: url('~assets/svg/link.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  margin-right: 5px;
  color: black;
  z-index: 100;
}

h3:hover > a > .icon.icon-link {
  background-image: url('~assets/svg/link.svg');
  display: inline-block;
  width: 15px;
  height: 15px;
  background-size: 15px 15px;
  margin-right: 5px;
  color: black;
  z-index: 100;
}
</style>
