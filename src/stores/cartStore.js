import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useLocalStorage } from '../composables/useLocalStorage'
import { useProductStore } from './productStore'

export const useCartStore = defineStore('cart', () => {
  const items = useLocalStorage('cart', [])
  const totalItems = computed(() => {
    return items.value.reduce((sum, item) => sum + item.qty, 0)
  })
  const totalPrice = computed(() => {
    return items.value.reduce((sum, item) => {
      const price = item.discount > 0
        ? item.price - (item.price * item.discount / 100)
        : item.price
      return sum + (price * item.qty)
    }, 0)
  })

  function addToCart(product) {
    const existingItem = items.value.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.qty++
    } else {
      items.value.push({
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.image,
        badge: product.badge,
        price: product.price,
        discount: product.discount,
        stock: product.stock,
        tags: product.tags,
        qty: 1
      })
    }
    const productStore = useProductStore()
    productStore.decreaseStock(product.id)
  }
  function removeFromCart(id) {
    const item = items.value.find(item => item.id === id)
    if (item) {
      const productStore = useProductStore()
      productStore.increaseStock(id, item.qty)
    }
    
    const index = items.value.findIndex(item => item.id === id)
    if (index !== -1) {
      items.value.splice(index, 1)
    }
  }
  function clearCart() {
    items.value = []
  }

  return {
    items,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart
  }
})
