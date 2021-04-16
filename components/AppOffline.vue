<template>
  <div
    v-if="$nuxt.isOffline"
    class="fixed bottom-0 w-full z-10 bg-red-500 text-center text-white grid grid-cols-1"
  >
    <div>
      <p class="my-auto text-white">😟 oops, it looks like you're offline.</p>
    </div>
  </div>
</template>
