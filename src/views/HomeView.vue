<script setup>
import { onMounted, onUnmounted, inject } from 'vue'
import CarouselBanner from '../components/CarouselBanner.vue'
import ProductCard from '../components/ProductCard.vue'

const products = inject('products')

onMounted(() => {
  console.log('HomeView mounted')
})

onUnmounted(() => {
  console.log('HomeView unmounted')
})
</script>

<template>
  <div>
    <CarouselBanner />
    <div class="mt-8">
      <h2 class="text-2xl font-bold mb-6">Our Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard 
          v-for="product in products" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </div>
  </div>
</template>
