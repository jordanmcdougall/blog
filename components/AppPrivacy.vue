<template>
  <div
    v-if="!isAcceptedPrivacy"
    class="fixed bottom-0 w-full z-10 bg-red-500 text-center text-white grid grid-cols-1 z-0"
  >
    <div>
      <p class="my-auto px-3 text-white mb-2">
        🍪 This site uses cookies. By continuing to use this site, you agree
        with our
        <NuxtLink class="underline" to="/privacy">privacy policy</NuxtLink>.
      </p>
      <button
        class="border-2 border-white p-1 rounded-lg mb-2"
        @click="acceptPrivacy()"
      >
        Close
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      closePrivacy: null,
      isAcceptedPrivacy: true,
    }
  },
  async created() {
    if ((await this.$storage.getLocalStorage('accept-privacy')) === true) {
      this.isAcceptedPrivacy = true
    } else {
      this.isAcceptedPrivacy = false
    }
  },
  methods: {
    acceptPrivacy() {
      this.$storage.setLocalStorage('accept-privacy', true)
      this.isAcceptedPrivacy = true
    },
  },
}
</script>
