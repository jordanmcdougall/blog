<template>
  <div
    class="pb-5 pt-5 pr-0 bg-white float-left flex items-center w-full space-x-4"
  >
    <div class="flex-shrink-0">
      <img
        class="w-10 h-10"
        src="../static/profile-picture.png"
        alt="Author Image"
      />
    </div>
    <div class="col-span-2">
      <div class="col-span-2 text-l font-medium text-black">{{ author }}</div>
      <div class="text-gray-600">
        {{ date | formatDate }}
      </div>
      <div class="text-gray-600">
        <span
          ><img
            class="h-4 w-4 mb-1 text-gray-600 my-auto inline"
            src="../assets/svg/clock.svg"
            alt="clock icon"
          />
          {{ readingTime }}</span
        >
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
    date: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    readingTime: {
      type: String,
      required: true,
    },
  },
}
</script>
