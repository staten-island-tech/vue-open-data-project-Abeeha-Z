<script setup>
import Bubble from '@/components/bubbleChart.vue'
</script>

<template>
  <main class="py-8">
    <h1 class="text-3xl font-bold text-center text-slate-800 mb-6">
      Crime Frequency by Time of Day and Month
    </h1>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <Bubble />
      <div class="mt-6 text-slate-600">
        <h2 class="text-xl font-semibold mb-2">About This Data</h2>
        <p>
          This visualization shows crime frequency patterns across different times of day and months
          of the year in New York City, helping identify temporal patterns in criminal activity.
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
