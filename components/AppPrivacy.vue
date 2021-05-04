<template>
  <div
    v-if="!$store.state.acceptedPrivacy"
    class="fixed bottom-0 w-full z-10 bg-red-500 text-center text-white grid grid-cols-1 z-0"
  >
    <div>
      <p class="my-auto px-3 text-white mb-2">
        🍪 This site uses cookies. By continuing to use you agree with our
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
    }
  },
  computed: {
    isAcceptedPrivacy() {
      return this.$store.state.acceptedPrivacy
    },
  },
  beforeMount() {
    if (this.$storage.getLocalStorage('accept-privacy')) {
      this.$store.commit('set', true)
    } else {
      this.$store.commit('set', false)
    }
  },
  methods: {
    acceptPrivacy() {
      this.$store.commit('set', true)
    },
  },
}
</script>
