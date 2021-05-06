<template>
  <div class="px-10 text-center">
    <SocialHead
      title="Contact"
      description="Get in touch with me."
      image="/profile-picture.png"
    />
    <h1 class="text-3xl">Contact Me</h1>
    <p class="mb-5 pt-3 px-10">
      If you need reach out and get in touch with me then you can use the form
      below. For faster responses, you can always contact me on
      <a class="underline" href="https://twitter.com/mcdougjo" target="."
        >Twitter</a
      >.
    </p>
    <form
      v-if="!isSubmitted"
      name="contact"
      method="POST"
      data-netlify="true"
      class="grid grid-cols-1 gap-y-6 w-2/3 mx-auto pt-8"
    >
      <input
        placeholder="Your Name"
        name="name"
        class="border border-black py-2 pl-2"
      />
      <input
        v-model="email"
        placeholder="Your Email"
        name="email"
        class="border border-black py-2 pl-2"
      />
      <textarea
        placeholder="Your Message"
        name="message"
        rows="4"
        class="border border-black py-2 pl-2"
      ></textarea>
      <button v-if="isEmailValid" type="submit" class="bg-red-600 text-white">
        Send
      </button>
    </form>
    <p v-else>Thank you for your enquiry.</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      isSubmitted: false,
    }
  },
  head() {
    return {
      title: 'Contact',
    }
  },
  computed: {
    isEmailValid() {
      return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        this.email
      )
    },
  },
}
</script>
