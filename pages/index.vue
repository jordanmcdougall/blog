<template>
  <div class="container grid grid-cols-1 sm:max-w-sm md:max-w-4xl mx-auto">
    <div class="items-center">
      <img
        class="h-1/4 w-1/4 mx-auto"
        src="../static/profile-picture.png"
        alt="Navbar Icon"
      />
      <p class="text-3xl font-serif text-center mx-auto h-5 mb-10">
        JORDAN MCDOUGALL
      </p>

      <div class="px-10">
        <p class="text-center mx-auto font-serif mb-3">
          👋 Hello and welcome to my blog site,
        </p>
        <p class="text-center mx-auto font-serif mb-3">
          🚀 I mostly write about technology and it's impact to society.
        </p>
        <p class="text-center mx-auto font-serif mb-10">
          ☕ If what I'm doing is helping you, you can support me on
          <a
            class="underline"
            href="https://ko-fi.com/jordanmcdougall"
            target="."
            >ko-fi</a
          >.
        </p>
      </div>
      <div class="flex justify-center mb-10">
        <NuxtLink to="/posts"
          ><button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            👀 View Posts
          </button>
        </NuxtLink>
      </div>
      <p class="text-center mb-5 font-serif text-gray-600">
        Keep up-to-date across my socials:
      </p>
      <div class="grid grid-cols-3 items-justify mx-20">
        <a
          v-for="social in socials"
          :key="social.id"
          :href="social.url"
          target="."
          class="mx-auto"
          ><svg
            class="h-8 w-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 hover:rotate-12"
          >
            <image class="h-8 w-8" :href="social.path" /></svg
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          name: 'twitter',
          path: '/twitter.svg',
          url: 'https://twitter.com/mcdougjo',
        },
        {
          name: 'linkedin',
          path: '/linkedin.svg',
          url: 'https://linkedin.com/in/jordanmcdougall',
        },
        {
          name: 'github',
          path: '/github.svg',
          url: 'https://github.com/jordanmcdougall',
        },
      ],
    }
  },
  methods: {
    sharePost() {
      console.log(this.$route)
      if (navigator.share) {
        navigator
          .share({
            title: this.page.title,
            url: `http://localhost:3000${this.$route.path}`,
          })
          .then(() => {
            console.log('Thanks for sharing!')
          })
          .catch(console.error)
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
}

h3 {
  padding: auto;
  @apply text-xl;
  @apply font-bold;
}

p {
  @apply mb-10;
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
