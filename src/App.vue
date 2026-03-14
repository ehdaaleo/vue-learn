<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen bg-base-100">
    <NavBar />
    <main class="container mx-auto p-4">
      <RouterView />
    </main>
  </div>
</template>
