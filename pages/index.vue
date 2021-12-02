<template>
  <div>
    <header><h1>Building a PWA with Nuxt</h1></header>
    <main>
      <p>We're building a PWA with Nuxt at the eCommerce Tech Summit!</p>
      <img :src="$icon(384)" height="192" width="192" alt="Nuxt logo" />
      <ul>
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
      <button @click="$fetch">Refresh</button>
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({ posts: [] }),
  fetchOnServer: false,
  async fetch() {
    this.posts = await fetch(`${window.location.href}api/slow`)
      .then(r => r.json())
      .then(r => r.sort((a, b) => (Math.random() < 0.5 ? -1 : 1)).slice(0, 10))
  },
}
</script>
