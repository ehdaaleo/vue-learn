import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useApi } from '../composables/useApi'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export const useProductStore = defineStore('product', () => {

  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const api = useApi(API_BASE_URL)

  
  const getProductById = computed(() => {
    return (id) => {
      const numericId = typeof id === 'string' ? parseInt(id) : id
      return products.value.find(p => p.id == numericId || p.id === numericId.toString())
    }
  })

  const totalStock = computed(() => {
    return products.value.reduce((sum, product) => {
      const stock = typeof product.stock === 'string' ? parseInt(product.stock) : product.stock
      return sum + stock
    }, 0)
  })

  async function fetchProducts() {
    loading.value = true
    error.value = null
    try {
      await api.getAll('products')
      if (api.error.value) {
        error.value = api.error.value
      } else {
        products.value = api.data.value || []
      }
    } catch (e) {
      error.value = e.message
      console.error('Error fetching products:', e)
    } finally {
      loading.value = false
    }
  }

  
  async function decreaseStock(productId) {
    const product = products.value.find(p => p.id === productId)
    if (product && product.stock > 0) {

      const updatedProduct = {
        ...product,
        stock: product.stock - 1
      }

      try {
        await api.update('products', productId, updatedProduct)
        
        if (!api.error.value) {
          const index = products.value.findIndex(p => p.id === productId)
          if (index !== -1) {
            products.value[index] = api.data.value || updatedProduct
          }
        }
      } catch (e) {
        console.error('Error updating stock:', e)
      }
    }
  }
  async function increaseStock(productId, quantity = 1) {
    const product = products.value.find(p => p.id === productId)
    if (product) {

      const updatedProduct = {
        ...product,
        stock: product.stock + quantity
      }

      try {
        await api.update('products', productId, updatedProduct)
        
        if (!api.error.value) {
          const index = products.value.findIndex(p => p.id === productId)
          if (index !== -1) {
            products.value[index] = api.data.value || updatedProduct
          }
        }
      } catch (e) {
        console.error('Error updating stock:', e)
      }
    }
  }

  return {
    products,
    loading,
    error,
    totalStock,
    getProductById,
    fetchProducts,
    decreaseStock,
    increaseStock
  }
})
