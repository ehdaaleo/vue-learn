<script setup>
import { onMounted, onUnmounted, computed, inject } from 'vue'
import { useRoute } from 'vue-router'
import ProductDetails from '../components/ProductDetails.vue'
import ProductCard from '../components/ProductCard.vue'

const products = inject('products')
const addToCart = inject('addToCart')
const handleBuy = inject('handleBuy')

const route = useRoute()

const productId = computed(() => {
  return parseInt(route.params.id)
})

const product = computed(() => {
  return products.value.find(p => p.id === productId.value)
})

const relatedProducts = computed(() => {
  return products.value.filter(p => p.id !== productId.value)
})

const onBuy = (productId) => {
  handleBuy(productId)
}

const onAddToCart = (productId) => {
  addToCart(productId)
}

onMounted(() => {
  console.log(`ProductView mounted for ID: ${productId.value}`)
})

onUnmounted(() => {
  console.log('ProductView unmounted')
})
</script>

<template>
  <div v-if="product">
    <ProductDetails 
      :product="product" 
      @buy="onBuy" 
      @addToCart="onAddToCart" 
    />
    
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
  <div v-else class="text-center py-12">
    <h2 class="text-2xl font-bold">Product not found</h2>
  </div>
</template>
