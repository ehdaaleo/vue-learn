import { ref, watch } from 'vue'


export function useLocalStorage(key, defaultValue) {
  const storedValue = localStorage.getItem(key)
  let initialValue
  if (storedValue !== null) {
    try {
      initialValue = JSON.parse(storedValue)
    } catch (e) {
      console.error('Error parsing localStorage value:', e)
      initialValue = defaultValue
    }
  } else {
    initialValue = defaultValue
  }

  const data = ref(initialValue)
  watch(
    data,
    (newValue) => {
      try {
        localStorage.setItem(key, JSON.stringify(newValue))
      } catch (e) {
        console.error('Error saving to localStorage:', e)
      }
    },
    { deep: true }
  )

  return data
}
