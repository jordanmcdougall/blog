<template>
  <div class="px-10 text-center">
    <SocialHead
      title="Contact"
      description="Get in touch with me."
      image="/profile-picture.png"
    />
    <h1 class="text-3xl">Contact Me</h1>
    <p class="mb-8 pt-3 px-10">
      If you need reach out and get in touch with me then you can use the form
      below. For faster responses, you can always contact me on
      <a class="underline" href="https://twitter.com/mcdougjo" target="."
        >Twitter</a
      >.
    </p>
    <form
      id="contact"
      class="w-full text-left"
      name="contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      onsubmit="event.preventDefault()"
    >
      <p class="hidden">
        <label
          >Don’t fill this out if you’re human: <input name="bot-field"
        /></label>
      </p>
      <input type="hidden" value="contact" name="form-name" />
      <p class="mb-8">
        <label
          >Your Name:
          <input
            v-model="formData.name"
            class="border-solid border-2 border-black w-full pl-2 py-2"
            type="text"
            name="name"
        /></label>
      </p>
      <p class="mb-8">
        <label
          >Your Email:
          <input
            v-model="formData.email"
            class="border-solid border-2 border-black pl-2 py-2 w-full"
            type="email"
            name="email"
        /></label>
      </p>
      <p class="mb-8">
        <label
          >Your Message:
          <textarea
            v-model="formData.message"
            class="border-solid border-2 border-black pl-2 py-2 w-full"
            name="message"
            rows="4"
          ></textarea>
        </label>
      </p>
      <p class="mb-8">
        <button
          class="mx-auto px-10 w-full cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="submitForm()"
        >
          Send
        </button>
      </p>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      isSubmitted: false,
      formData: {
        name: '',
        email: '',
        message: '',
        'bot-field': '',
        'form-name': 'contact',
      },
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
    myclass() {
      return this.isEmailValid
        ? 'bg-red-600  text-white'
        : 'bg-gray-600  text-gray-400 cursor-not-allowed'
    },
  },
  methods: {
    async submitForm() {
      const myForm = document.getElementById('contact')
      const formData = new FormData(myForm)

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
        url: 'https://jordanmcdougall.dev',
      }

      await this.$axios(options).then((res) => {
        console.log(res)
        console.log('form sent')
        this.$router.push('/contact/thank-you')
      })
    },
  },
}
</script>
