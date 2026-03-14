import { ref } from 'vue'

export function useApi(baseURL) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  
  async function getAll(resource) {
    loading.value = true
    error.value = null
    try {
      const response = await fetch(`${baseURL}/${resource}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      data.value = await response.json()
    } catch (e) {
      error.value = e.message
      console.error('useApi getAll error:', e)
    } finally {
      loading.value = false
    }
  }


  async function getOne(resource, id) {
    loading.value = true
    error.value = null
    try {
      const response = await fetch(`${baseURL}/${resource}/${id}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      data.value = await response.json()
    } catch (e) {
      error.value = e.message
      console.error('useApi getOne error:', e)
    } finally {
      loading.value = false
    }
  }

 
  async function update(resource, id, payload) {
    loading.value = true
    error.value = null
    try {
      const response = await fetch(`${baseURL}/${resource}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      data.value = await response.json()
      return data.value
    } catch (e) {
      error.value = e.message
      console.error('useApi update error:', e)
      throw e
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    error,
    loading,
    getAll,
    getOne,
    update
  }
}
