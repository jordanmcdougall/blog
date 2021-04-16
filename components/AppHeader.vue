<template class="dark">
  <header class="flex flex-row justify-between space-x-4 bg-white py-4 px-4">
    <a href="/">
      <span class="sr-only">jordanmcdougall</span>
      <img
        class="w-10 h-10"
        src="../static/profile-picture.png"
        alt="Navbar Icon"
      />
    </a>
    <nav class="flex flex-row space-x-6 font-semibold">
      <a
        v-for="item in menuItems"
        :key="item.name"
        :href="item.route"
        class="text-black hover:underline my-auto"
        >{{ item.name }}</a
      >
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      menuItems: [
        {
          name: 'Home',
          route: '/',
        },
        /* {
          name: 'About',
          route: '/about',
        }, */
        {
          name: 'Contact',
          route: '/contact',
        },
        {
          name: 'Search',
          route: '/search',
        },
      ],
    }
  },
}
</script>
