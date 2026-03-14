<script setup>
import { onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['buy', 'addToCart'])

const discountedPrice = computed(() => {
  if (props.product.discount > 0) {
    return props.product.price - (props.product.price * props.product.discount / 100)
  }
  return props.product.price
})

const handleBuy = () => {
  emit('buy', props.product.id)
}

const handleAddToCart = () => {
  emit('addToCart', props.product.id)
}

onMounted(() => {
  console.log('ProductDetails mounted')
})

onUnmounted(() => {
  console.log('ProductDetails unmounted')
})
</script>

<template>
  <div class="card bg-base-200 shadow-xl">
    <div class="card-body">
      <div class="flex flex-col md:flex-row gap-8">
        <div class="flex-shrink-0">
          <img 
            :src="product.image" 
            :alt="product.name" 
            class="w-full md:w-80 rounded-lg"
          />
        </div>
        <div class="flex-grow">
          <div class="flex justify-between items-start">
            <h2 class="card-title text-2xl">{{ product.name }}</h2>
            <span v-if="product.badge" class="badge badge-secondary badge-lg">
              {{ product.badge }}
            </span>
          </div>
          
          <p class="mt-4 text-gray-300">{{ product.description }}</p>
          
          <div class="mt-6">
            <div class="flex items-center gap-4">
              <span class="text-3xl font-bold">${{ discountedPrice.toFixed(2) }}</span>
              <span v-if="product.discount > 0" class="text-lg text-gray-400 line-through">
                ${{ product.price }}
              </span>
              <span v-if="product.discount > 0" class="badge badge-error">
                -{{ product.discount }}%
              </span>
            </div>
          </div>
          
          <div class="mt-4">
            <span class="text-lg">Stock: </span>
            <span :class="product.stock > 0 ? 'text-success' : 'text-error'">
              {{ product.stock > 0 ? product.stock : 'Out of Stock' }}
            </span>
          </div>
          
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tag in product.tags" :key="tag" class="badge badge-outline">
              {{ tag }}
            </span>
          </div>
          
          <div class="mt-6 flex gap-4">
            <button 
              @click="handleAddToCart" 
              class="btn btn-secondary btn-lg"
              :disabled="product.stock === 0"
            >
              {{ product.stock === 0 ? 'Out of Stock' : 'Add to Cart' }}
            </button>
            <button 
              @click="handleBuy" 
              class="btn btn-primary btn-lg"
              :disabled="product.stock === 0"
            >
              {{ product.stock === 0 ? 'Out of Stock' : 'Buy Now' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
