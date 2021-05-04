<template>
  <div>
    <div v-for="post in page" :key="post.id" class="items-center mb-6">
      <div class="mt-6">
        <div class="max-w-full px-10 py-6 bg-white rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <span class="font-light text-gray-600">{{
              post.updatedAt | formatDate
            }}</span
            ><span
              class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded"
              >{{ post.topic }}</span
            >
          </div>
          <div class="mt-2">
            <NuxtLink
              :to="'/' + post.slug"
              class="text-2xl text-gray-700 font-bold hover:underline"
              >{{ post.title }}</NuxtLink
            >
            <p class="mt-2 text-gray-600">
              {{ post.description }}
            </p>
          </div>
          <div class="flex justify-between items-center mt-4">
            <NuxtLink
              :to="'/' + post.slug"
              class="text-blue-500 hover:underline"
              >Read more</NuxtLink
            >
            <div>
              <span href="#" class="flex items-center"
                ><img
                  src="/profile-picture.png"
                  alt="avatar"
                  class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                />
                <h1 class="text-gray-700 font-bold">
                  {{ post.author }}
                </h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    formatDate(date) {
      return new Date(date).toDateString()
    },
  },
  props: {
    page: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>
