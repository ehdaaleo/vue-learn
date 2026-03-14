<script setup>
import { onMounted, onUnmounted } from 'vue'
import CarouselBanner from '../components/CarouselBanner.vue'
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '../stores/productStore'

const productStore = useProductStore()

onMounted(async () => {
  console.log('HomeView mounted')
  await productStore.fetchProducts()
})
onUnmounted(() => {
  console.log('HomeView unmounted')
})
</script>

<template>
  <div>
    <CarouselBanner />
    <div v-if="productStore.loading" class="text-center py-12">
      <span class="loading loading-spinner loading-lg text-primary"></span>
      <p class="mt-4">Loading products...</p>
    </div>
    <div v-else-if="productStore.error" class="text-center py-12">
      <p class="text-error text-xl">Error: {{ productStore.error }}</p>
      <button @click="productStore.fetchProducts" class="btn btn-primary mt-4">
        Retry
      </button>
    </div>
    <div v-else class="mt-8">
      <h2 class="text-2xl font-bold mb-6">Our Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard 
          v-for="product in productStore.products" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </div>
  </div>
</template>
