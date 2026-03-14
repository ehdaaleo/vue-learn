<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('AboutView mounted')
})

onUnmounted(() => {
  console.log('AboutView unmounted')
})
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <div class="card bg-base-200 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-3xl mb-6">About Us</h2>
        
        <div class="space-y-4">
          <div>
            <span class="font-bold">Name:</span>
            <span class="ml-2">Ehdaa A.Salah </span>
          </div>
          
          <div>
            <span class="font-bold">Course:</span>
            <span class="ml-2">VueJS Development</span>
          </div>
          
          <div>
            <span class="font-bold">Institution:</span>
            <span class="ml-2">ITI (Information Technology Institute)</span>
          </div>
          
          <div class="divider"></div>
          
          <div>
            <p class="text-gray-300 leading-relaxed">
              Welcome to ShoeStore,
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
