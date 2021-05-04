<template class="dark">
  <header class="flex flex-row justify-between space-x-4 bg-white py-4 px-4">
    <NuxtLink to="/">
      <span class="sr-only">jordanmcdougall</span>
      <img
        class="w-10 h-10"
        src="../static/profile-picture.png"
        alt="Navbar Icon"
      />
    </NuxtLink>
    <nav class="flex flex-row space-x-6 font-semibold">
      <NuxtLink
        v-for="item in menuItems"
        :key="item.name"
        :to="item.route"
        class="text-black hover:underline my-auto cursor-pointer"
        >{{ item.name }}</NuxtLink
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
        { name: 'Posts', route: '/posts' },
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
