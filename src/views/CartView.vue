<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useCartStore } from '../stores/cartStore'
import { useProductStore } from '../stores/productStore'

const cartStore = useCartStore()
const productStore = useProductStore()

const customerName = ref('')
const customerAddress = ref('')
const showCheckoutForm = ref(false)
const checkoutError = ref('')

const isFormValid = computed(() => {
  return customerName.value.trim().length > 0 && 
         customerAddress.value.trim().length > 0
})

const getDiscountedPrice = (item) => {
  if (item.discount > 0) {
    return item.price - (item.price * item.discount / 100)
  }
  return item.price
}

const onRemove = (productId) => {
  cartStore.removeFromCart(productId)
}

const onCheckout = () => {
  showCheckoutForm.value = true
}

const handleSubmit = () => {
  checkoutError.value = ''
  
  if (!validateStock()) {
    checkoutError.value = 'Some items are no longer available in the requested quantity. Please review your cart.'
    return
  }
  
  if (isFormValid.value) {
    alert(`Thank you ${customerName.value}! Your order has been placed.\nShipping to: ${customerAddress.value}`)
    cartStore.clearCart()
    customerName.value = ''
    customerAddress.value = ''
    showCheckoutForm.value = false
  }
}

const cancelCheckout = () => {
  showCheckoutForm.value = false
  customerName.value = ''
  customerAddress.value = ''
  checkoutError.value = ''
}

const validateStock = () => {
  for (const item of cartStore.items) {
    const product = productStore.getProductById(item.id)
    if (!product || product.stock < item.qty) {
      return false
    }
  }
  return true
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
    
    <div v-if="cartStore.items.length === 0" class="text-center py-12">
      <p class="text-xl text-gray-400">Your cart is empty</p>
      <RouterLink to="/" class="btn btn-primary mt-4">
        Continue Shopping
      </RouterLink>
    </div>
    
    <div v-else>
      <div class="grid gap-4">
        <div 
          v-for="item in cartStore.items" 
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
              <p class="text-sm text-gray-400">Quantity: {{ item.qty }}</p>
              <p class="text-primary font-bold">
                ${{ (getDiscountedPrice(item) * item.qty).toFixed(2) }}
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
              ${{ cartStore.totalPrice.toFixed(2) }}
            </span>
          </div>
        
          <div v-if="showCheckoutForm" class="mt-6 border-t pt-4">
            <h3 class="text-lg font-bold mb-4">Checkout Information</h3>
            <div v-if="checkoutError" class="alert alert-error mb-4">
              <span>{{ checkoutError }}</span>
            </div>
            
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input 
                v-model="customerName" 
                type="text" 
                placeholder="Enter your name" 
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-4">
              <label class="label">
                <span class="label-text">Address</span>
              </label>
              <textarea 
                v-model="customerAddress" 
                placeholder="Enter your address" 
                class="textarea textarea-bordered"
              ></textarea>
            </div>
            <div class="flex gap-4 mt-6">
              <button 
                @click="handleSubmit" 
                class="btn btn-success"
                :disabled="!isFormValid"
              >
                Confirm Order
              </button>
              <button 
                @click="cancelCheckout" 
                class="btn btn-ghost"
              >
                Cancel
              </button>
            </div>
          </div>
          
          <div v-else class="card-actions justify-end mt-4">
            <button @click="onCheckout" class="btn btn-primary btn-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
