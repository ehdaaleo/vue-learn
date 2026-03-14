<script setup>
import { ref, computed } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

// All product data lives in App.vue only
const products = ref([
  {
    id: 1,
    name: "Cozy Sneakers",
    description: "High-quality sneakers that go with everything you wear.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    badge: "NEW",
    price: 120,
    discount: 20,
    stock: 10,
    tags: ["Fashion", "Casual", "Sport"]
  },
  {
    id: 2,
    name: "Running Shoes",
    description: "Built for speed and comfort on any terrain.",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300&h=300&fit=crop",
    badge: "",
    price: 90,
    discount: 10,
    stock: 5,
    tags: ["Sport", "Running"]
  },
  {
    id: 3,
    name: "Casual Boots",
    description: "Rugged boots for everyday adventures.",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=300&h=300&fit=crop",
    badge: "SALE",
    price: 150,
    discount: 0,
    stock: 8,
    tags: ["Casual", "Winter"]
  },
  {
    id: 4,
    name: "Flip Flops",
    description: "Light and breezy for sunny days.",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=300&h=300&fit=crop",
    badge: "",
    price: 30,
    discount: 50,
    stock: 20,
    tags: ["Summer", "Casual"]
  }
])

// Cart state
const cart = ref([])

// Computed property for total stock (Bonus Challenge)
const totalStock = computed(() => {
  return products.value.reduce((sum, product) => sum + product.stock, 0)
})

// Cart count
const cartCount = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.quantity, 0)
})

// Cart total
const cartTotal = computed(() => {
  return cart.value.reduce((sum, item) => {
    const price = item.discount > 0 
      ? item.price - (item.price * item.discount / 100)
      : item.price
    return sum + (price * item.quantity)
  }, 0)
})

// Handle add to cart
const addToCart = (productId) => {
  const product = products.value.find(p => p.id === productId)
  if (product && product.stock > 0) {
    const existingItem = cart.value.find(item => item.id === productId)
    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        existingItem.quantity++
      }
    } else {
      cart.value.push({
        ...product,
        quantity: 1
      })
    }
  }
}

// Handle remove from cart
const removeFromCart = (productId) => {
  const index = cart.value.findIndex(item => item.id === productId)
  if (index > -1) {
    cart.value.splice(index, 1)
  }
}

// Handle buy event - decrease stock
const handleBuy = (productId) => {
  const product = products.value.find(p => p.id === productId)
  if (product && product.stock > 0) {
    product.stock--
  }
}

// Handle checkout - clear cart after purchase
const handleCheckout = () => {
  cart.value = []
}

// Provide data to all child components
import { provide } from 'vue'
provide('products', products)
provide('cart', cart)
provide('cartTotal', cartTotal)
provide('addToCart', addToCart)
provide('removeFromCart', removeFromCart)
provide('handleBuy', handleBuy)
provide('handleCheckout', handleCheckout)
</script>

<template>
  <div class="min-h-screen bg-base-100">
    <NavBar :totalStock="totalStock" :cartCount="cartCount" />
    <main class="container mx-auto p-4">
      <RouterView />
    </main>
  </div>
</template>
