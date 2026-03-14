<script setup>
import { onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductDetails from '../components/ProductDetails.vue'
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '../stores/productStore'

const productStore = useProductStore()
const route = useRoute()

const productId = computed(() => {
  return parseInt(route.params.id)
})

const product = computed(() => {
  return productStore.getProductById(productId.value)
})

const relatedProducts = computed(() => {
  const currentId = productId.value
  const numericCurrentId = typeof currentId === 'string' ? parseInt(currentId) : currentId
  return productStore.products.filter(p => p.id !== numericCurrentId && p.id !== numericCurrentId.toString())
})

const hasError = computed(() => {
  return productStore.error !== null
})

onMounted(async () => {
  console.log(`ProductView mounted for ID: ${productId.value}`)

  if (productStore.products.length === 0) {
    await productStore.fetchProducts()
  }
})

onUnmounted(() => {
  console.log('ProductView unmounted')
})
</script>

<template>
  <div v-if="product">
    <ProductDetails :product="product" />
    
    <div class="mt-12">
      <h3 class="text-2xl font-bold mb-6">Related Products</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard 
          v-for="relatedProduct in relatedProducts" 
          :key="relatedProduct.id" 
          :product="relatedProduct" 
        />
      </div>
    </div>
  </div>
  

  <div v-else-if="hasError" class="text-center py-12">
    <p class="text-error text-xl">Error: {{ productStore.error }}</p>
    <button @click="productStore.fetchProducts" class="btn btn-primary mt-4">
      Retry
    </button>
  </div>
  
  <div v-else-if="productStore.loading" class="text-center py-12">
    <span class="loading loading-spinner loading-lg text-primary"></span>
    <p class="mt-4">Loading product...</p>
  </div>
  
  <div v-else class="text-center py-12">
    <h2 class="text-2xl font-bold">Product not found</h2>
    <RouterLink to="/" class="btn btn-primary mt-4">
      Back to Home
    </RouterLink>
  </div>
</template>
