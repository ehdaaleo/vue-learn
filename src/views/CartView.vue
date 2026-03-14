<script setup>
import { onMounted, onUnmounted, inject } from 'vue'

const cart = inject('cart')
const cartTotal = inject('cartTotal')
const removeFromCart = inject('removeFromCart')
const handleCheckout = inject('handleCheckout')

const getDiscountedPrice = (product) => {
  if (product.discount > 0) {
    return product.price - (product.price * product.discount / 100)
  }
  return product.price
}

const onRemove = (productId) => {
  removeFromCart(productId)
}

const onCheckout = () => {
  handleCheckout()
}

onMounted(() => {
  console.log('CartView mounted')
})

onUnmounted(() => {
  console.log('CartView unmounted')
})
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Shopping Cart</h2>
    
    <div v-if="cart.length === 0" class="text-center py-12">
      <p class="text-xl text-gray-400">Your cart is empty</p>
      <RouterLink to="/" class="btn btn-primary mt-4">
        Continue Shopping
      </RouterLink>
    </div>
    
    <div v-else>
      <div class="grid gap-4">
        <div 
          v-for="item in cart" 
          :key="item.id" 
          class="card bg-base-200 shadow-xl"
        >
          <div class="card-body flex flex-row items-center">
            <img 
              :src="item.image" 
              :alt="item.name" 
              class="w-24 h-24 object-cover rounded-lg"
            />
            <div class="flex-grow ml-4">
              <h3 class="font-bold text-lg">{{ item.name }}</h3>
              <p class="text-sm text-gray-400">Quantity: {{ item.quantity }}</p>
              <p class="text-primary font-bold">
                ${{ (getDiscountedPrice(item) * item.quantity).toFixed(2) }}
              </p>
            </div>
            <button 
              @click="onRemove(item.id)" 
              class="btn btn-error btn-sm"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      
      <div class="mt-8 card bg-base-200 shadow-xl">
        <div class="card-body">
          <div class="flex justify-between items-center">
            <span class="text-xl font-bold">Total:</span>
            <span class="text-2xl font-bold text-primary">
              ${{ cartTotal.toFixed(2) }}
            </span>
          </div>
          <div class="card-actions justify-end mt-4">
            <button @click="onCheckout" class="btn btn-primary btn-lg">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
