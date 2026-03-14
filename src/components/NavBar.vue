<script setup>
import { onMounted, onUnmounted } from 'vue'

defineProps({
  totalStock: {
    type: Number,
    required: true
  },
  cartCount: {
    type: Number,
    required: true
  }
})

onMounted(() => {
  console.log('NavBar mounted')
})

onUnmounted(() => {
  console.log('NavBar unmounted')
})
</script>

<template>
  <nav class="navbar bg-base-200 shadow-lg">
    <div class="container mx-auto">
      <div class="flex-1">
        <RouterLink to="/" class="btn btn-ghost text-xl">
          ShoeStore
        </RouterLink>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/cart">Cart</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
        </ul>
        <div class="badge badge-primary ml-4">
          Stock: {{ totalStock }}
        </div>
        <div class="badge badge-secondary ml-2">
          🛒 {{ cartCount }}
        </div>
      </div>
    </div>
  </nav>
</template>
