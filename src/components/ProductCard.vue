<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cartStore'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const router = useRouter()
const cartStore = useCartStore()

const navigateToProduct = () => {
  router.push(`/product/${props.product.id}`)
}

const handleAddToCart = () => {
  if (props.product.stock > 0) {
    cartStore.addToCart(props.product)
  }
}

onMounted(() => {
  console.log('ProductCard mounted')
})

onUnmounted(() => {
  console.log('ProductCard unmounted')
})
</script>

<template>
  <div class="card bg-base-200 shadow-xl">
    <figure>
      <img 
        :src="product.image" 
        :alt="product.name" 
        class="w-full h-48 object-cover"
      />
    </figure>
    <div class="card-body">
      <div class="flex justify-between items-start">
        <h2 class="card-title">{{ product.name }}</h2>
        <span v-if="product.badge" class="badge badge-secondary">
          {{ product.badge }}
        </span>
      </div>
      <p class="text-lg font-bold">${{ product.price }}</p>
      <div class="card-actions justify-end mt-4">
        <button @click="navigateToProduct" class="btn btn-primary">
          View Product
        </button>
        <button 
          @click="handleAddToCart" 
          class="btn btn-secondary"
          :disabled="product.stock === 0"
        >
          {{ product.stock === 0 ? 'Out of Stock' : 'Add to Cart' }}
        </button>
      </div>
    </div>
  </div>
</template>
