<script setup>
import Line from '@/components/lineChart.vue'
</script>

<template>
  <main class="py-8">
    <h1 class="text-3xl font-bold text-center text-slate-800 mb-6">
      NYC Population Growth vs Water Consumption
    </h1>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <Line />
      <div class="mt-6 text-slate-600">
        <h2 class="text-xl font-semibold mb-2">About This Data</h2>
        <p>
          This chart displays the relationship between New York City's population growth and water
          consumption over time. The data demonstrates how water usage efficiency has improved
          despite population increases.
        </p>
      </div>
    </div>
    <div class="mt-4">
      <RouterLink to="/" class="text-blue-600 hover:underline font-medium"
        >&larr; Back to Home</RouterLink
      >
    </div>
  </main>
</template>
